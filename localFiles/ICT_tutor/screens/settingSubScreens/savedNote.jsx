import React, { Component } from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import Styles from './myNoteStyles'
import List from './to_do/List'
import Main from './to_do/main'
export default class SavedNotes extends Component{
    
    render(){
        const {loadingItems, allItems, inputValue,} = new Main().state;
        return(
            <View styles = {Styles.container}>
                <View style = {Styles.myNoteHeader}>
                    <Text style = {Styles.TxtHeader}>Saved Notes</Text>
                </View>
                <View style={Styles.list}>
          <View style={Styles.column}>
            <View style={Styles.deleteAllButton}>
            
            </View>
          </View>
          {loadingItems ? (
            <ScrollView contentContainerStyle={Styles.scrollableList}>
              {Object.values(allItems)
                .reverse()
                .map(item => (
                  <List
                    key={item.id}
                    {...item}
                    deleteItem={new Main().deleteItem}
                    completeItem={new Main().completeItem}
                    incompleteItem={new Main().incompleteItem}
                  />
                ))}
            </ScrollView>
          ) : (
            <ActivityIndicator size="large" color="#d8d" />
          )}
        </View>

            </View>
        )
    }
}