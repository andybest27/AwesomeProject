import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {  WebView } from "react-native-webview";
const WebViewExample = () => {
return (
        <View style = {styles.container}>
            <WebView
            source = {{ uri:'https://www.google.com/' }}
            />
        </View>
)
}
export default WebViewExample;
const styles = StyleSheet.create({
container: { height: 350, }
})