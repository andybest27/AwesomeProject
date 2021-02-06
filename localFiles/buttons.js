import React, { Component } from 'react'
import { Button, ButtonProperties } from 'react-native'
const handlePress =() => false
return(
    <Button
        onPress = {handlePress}
        title = "Red Button"
        color = "red"
    />
)
export default handlePress