import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Alert} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Styles from './searchStyles'

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default class Search extends Component{
    render(){
        return(
            <View style = {Styles.container}>
                <View style = {Styles.searchView}>
                    <Entypo name= 'magnifying-glass' size = {30} color = 'gray' />
                     <TextInput 
                        placeholder = "Search"  
                        style={Styles.TxtInput}
                        autoCapitalize = 'sentences'
                        returnKeyType= 'search'
                        maxLength = {30}
                        autoCompleteType = 'email'
                        autoFocus = {true}
                    />
                </View>               
                <View  style = {Styles.matchTxt}>
                    <Text style = {Styles.lblTxt}>SEARCH USING KEYWORDS IN THE FIELD PROVIDED ABOVE</Text>
                    <Text style = {Styles.recordTxt}>No Match Found</Text>
                </View>
            </View>
        )
    }
}
