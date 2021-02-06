import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
class Inputs extends Component {

    //state (variables holder) declaration and properties assignment.
    state = { 
        email: '', password: '', 
    }

    handleEmail = (text) => { 
            this.setState({
                email: text
            })
    }
    handlePassword = (text) => {
        this.setState({
            password: text
        })
    }
    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }
    //main function (render)
    render() {
        return ( 
        <View style = { styles.container}>
            <Text style = {styles.login}>Login System</Text>
            <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = { this.handleEmail }
            /> 

            <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handlePassword}
            /> 
            <TouchableOpacity style = { styles.submitButton}
                    onPress = {
                        () => this.login(this.state.email, this.state.password)
                    } >
                    <Text style = {styles.submitButtonText} > Submit </Text> 
            </TouchableOpacity>
        </View>
        )
    }
    }
    export default Inputs
    const styles = StyleSheet.create({
        container: {
            paddingTop: 30,
            height: 710,
            backgroundColor: '#ffff',
            flex: 1,
        },
        input: {
            margin: 15,
            height: 40,
            borderColor: '#7a42f4',
            borderWidth: 1,
            paddingLeft: 4,
        },
        submitButton: {
            backgroundColor: '#7a42f4',
            padding: 10,
            margin: 15,
            height: 40,
            alignItems: 'center',
        },
        submitButtonText: {
            color: 'white'
        },
        login: {
            marginTop: 15,
            paddingStart: 15,
            fontWeight: 'bold',
            color: '#7a42f4'
            
        }
    })