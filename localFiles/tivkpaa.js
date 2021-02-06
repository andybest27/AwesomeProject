import React, {
    Component
} from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native'
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
//the old image background by reference
//const image = {uri: 'C:/Users/master/AwesomeProject/MyImages/background.png'};

let state = {
    code: 'Invalid Activation Code'
}
const errorAlert = () => (
   Alert.alert(state.code)
);
const App = () => (

    <View style = {styles.container}>
    <ImageBackground ImageBackground source = {
        require('C:/Users/master/AwesomeProject/MyImages/background1.png')
    }
    style = {
        styles.image
    } >
    <Image source = {
        require('C:/Users/master/AwesomeProject/MyImages/logo.png')
    }
    style = {
        {
            width: DeviceWidth * 0.3,
            height: DeviceWidth * 0.3,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginBottom: 70,
        }
    }
    />  
    <Text style = {styles.titleText} >
        TIVKPAA Modern Tech. 
    </Text> 
    <View style = {{flexDirection: 'row', backgroundColor: '#1c055d', marginRight: 15, alignSelf: 'center', marginTop: 40, marginLeft: 15, borderRadius: 5,}}>
            <Image source = {
                require('C:/Users/master/AwesomeProject/MyImages/padlock.png')
            }
            style = {styles.ImageStyle}
            /> 
            <TextInput style = {
                styles.input
            } secureTextEntry
            underlineColorAndroid = "transparent"
            placeholder = "ENTER VERIFICATION CODE"
            placeholderTextColor = "gray"
            autoCapitalize = "none" 
            />
    </View>
    <TouchableOpacity style = {
        styles.submitButton
    }
    onPress = { errorAlert } >
            <Text Text style = {styles.submitButtonText} >
                OK
            </Text> 
    </TouchableOpacity> 
    </ImageBackground> 
</View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    titleText: {
        color: '#ffff',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'serif',
        alignSelf: 'center'
    },
    input: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 45,
        marginLeft: 5,
        textAlign: 'center',
        width: DeviceWidth*0.8,
        paddingLeft: 6,
        borderBottomEndRadius: 5,
        borderTopEndRadius: 5,
        fontSize: 20,
    },
    submitButton: {
        backgroundColor: '#1c055d',
        padding: 10,
        margin: 15,
        height: 45,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    ImageStyle: {
        height: 30,
        margin: 5,
        borderBottomLeftRadius: 5,
        width: 25,
        padding: 10,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
});

export default App;