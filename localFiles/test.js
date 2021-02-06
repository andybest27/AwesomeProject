import React, { Component } from 'react'
import {View, Text, StyleSheet } from 'react-native'
class test extends Component{
    render(){
        return(
            <View>
                
                <Text style = {style.container}>Samuel Andrew</Text>
            </View>
        )
    }
} export default test
const style = StyleSheet.create({
   container: {
       backgroundColor: '#000',
       fontWeight: 'bold',
       alignContent: 'center',
       alignItems: 'center',
       color: '#ffff'
   }
})