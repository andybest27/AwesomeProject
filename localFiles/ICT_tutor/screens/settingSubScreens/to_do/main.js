import React, { Component } from 'react';
import {  StyleSheet,  View,  StatusBar, Text,  ActivityIndicator,  ScrollView,  AsyncStorage} from 'react-native';
import { LinearGradient } from 'expo';
import uuid from 'uuid/v1';
import { primaryGradientArray } from './Colors';
import Input from './Input';
import List from './List';
import styles from '../myNoteStyles'
//import Button from './components/Button' <Button deleteAllItems={this.deleteAllItems} />;
const headerTitle = 'To Do';
export default class Main extends Component {
      state = {
        inputValue: '',
        loadingItems: false,
        allItems: {},
        isCompleted: false
      };
      componentDidMount = () => {
        this.loadingItems();
      };
      newInputValue = value => {
        this.setState({
          inputValue: value
        });
      };
      loadingItems = async () => {
        try {
          const allItems = await AsyncStorage.getItem('ToDos');
          this.setState({
            loadingItems: true,
            allItems: JSON.parse(allItems) || {}
          });
        } catch (err) {
          console.log(err);
        }
      };
      onDoneAddItem = () => {
        const { inputValue } = this.state;
        if (inputValue !== '') {
          this.setState(prevState => {
            const id = uuid();
            const newItemObject = {
              [id]: {
                id,
                isCompleted: false,
                text: inputValue,
                createdAt: Date.now()
              }
            };
            const newState = {
              ...prevState,
              inputValue: '',
              allItems: {
                ...prevState.allItems,
                ...newItemObject
              }
            };
            this.saveItems(newState.allItems);
            return { ...newState };
          });
        }
      };
      deleteItem = id => {
        this.setState(prevState => {
          const allItems = prevState.allItems;
          delete allItems[id];
          const newState = {
            ...prevState,
            ...allItems
          };
          this.saveItems(newState.allItems);
          return { ...newState };
        });
      };
      completeItem = id => {
        this.setState(prevState => {
          const newState = {
            ...prevState,
            allItems: {
              ...prevState.allItems,
              [id]: {
                ...prevState.allItems[id],
                isCompleted: true
              }
            }
          };
          this.saveItems(newState.allItems);
          return { ...newState };
        });
      };
      incompleteItem = id => {
        this.setState(prevState => {
          const newState = {
            ...prevState,
            allItems: {
              ...prevState.allItems,
              [id]: {
                ...prevState.allItems[id],
                isCompleted: false
              }
            }
          };
          this.saveItems(newState.allItems);
          return { ...newState };
        });
      };
      deleteAllItems = async () => {
        try {
          await AsyncStorage.removeItem('ToDos');
          this.setState({ allItems: {} });
        } catch (err) {
          console.log(err);
        }
      };
      saveItems = newItem => {
        const saveItem = AsyncStorage.setItem('To Dos', JSON.stringify(newItem));
      };
  render(){
    const { inputValue, loadingItems, allItems } = this.state;
    return (
      <View colors={primaryGradientArray} style={styles.container}>
        <View style = {styles.myNoteHeader}>
            <Text style = {styles.TxtHeader}>Write Note</Text>
        </View> 
        <View style={styles.inputContainer}>
          <Input
            inputValue={inputValue}
            onChangeText={this.newInputValue}
            onDoneAddItem={this.onDoneAddItem}
          />
        </View>
        <View style={styles.list}>
          <View style={styles.column}>
            <View style={styles.deleteAllButton}>
            
            </View>
          </View>
          {loadingItems ? (
            <ScrollView contentContainerStyle={styles.scrollableList}>
              {Object.values(allItems)
                .reverse()
                .map(item => (
                  <List
                    key={item.id}
                    {...item}
                    deleteItem={this.deleteItem}
                    completeItem={this.completeItem}
                    incompleteItem={this.incompleteItem}
                  />
                ))}
            </ScrollView>
          ) : (
            <ActivityIndicator size="large" color="#d8d" />
          )}
        </View>
      </View>
    );
  }
}