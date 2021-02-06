import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, } from 'react-native'

class counter extends Component{
    state = {
        count: 0
    }
onPress = () =>{
    this.setState({
        count: this.state.count + 1
    })
}
render(){
    return(
        <View style = {style.container}>
            <TouchableOpacity style = {style.button}
            onPress={this.onPress}>
                <Text>Click Me</Text>
            </TouchableOpacity>
            <View>
                <Text>
                    You Clicked {this.state.count} times
                </Text>
            </View>
        </View>
    )
}
}
const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
    }
})
export default counter;