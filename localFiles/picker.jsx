import React, { Component } from 'react';
import {View, Text, Picker, StyleSheet, Dimensions, Alert } from 'react-native'
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
    class PickerExample extends Component {
        state = {user: ''}
        updateUser = (user) => {
            if (user=="") {
               Alert.alert("Please Select a Programme");
            } else {
                this.setState({ user: user })
            }
        }
        render() {
            return (
                <View style={styles.container}>
                    <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} style = {styles.pickerStyle}>
                        <Picker.Item label = "-select programme-" value = "" />
                        <Picker.Item label = "Diploma Programme" value = "Diploma Programme" />
                        <Picker.Item label = "Certificate Programme" value = "Certificate Programme" />
                        <Picker.Item label = "Advance Diploma " value = "Advance Diploma Programme" />
                    </Picker>
                    <Text style = {styles.text}>{this.state.user}</Text>
                </View>
            )
        }
    }
    export default PickerExample
    const styles = StyleSheet.create({
    text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
    },
    container:{
        marginTop: 100,
    },
    pickerStyle:{
        borderColor: 'red',
        width: DeviceWidth,
        borderWidth: 5,
    }
    })