import React, { useState } from 'react';
import Styles from './homeStyles';
import LocalStyle from './activateStyles';
import { AntDesign} from '@expo/vector-icons';
import { View, Text, Alert, TextInput, ToastAndroid, Image, TouchableOpacity, ImageBackground, StatusBar, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from './loader'
const Activate = props => {
let [ActCode, setActCode] = useState('');
let [loading, setLoading] = useState(false);
let [errortext, setErrortext] = useState('');

    const handleSubmitPress = () => {
    setErrortext('');
    if (!ActCode) {
      Alert.alert('Error', 'Please enter Activation Code');
      return;
    }
    setLoading(true);
    
        // If server response message same as Data Matched
        if (ActCode == 'password') {
          ToastAndroid.show('Activation Successful, Redirecting...', ToastAndroid.LONG);
          AsyncStorage.setItem('user_id', 'password');
          props.navigation.navigate('Main');
        } else {
          Alert.alert('', 'Invalid Activation Code');
          setLoading(false);
        }

};
        return(
            <View>
               <StatusBar backgroundColor = '#b06801' barStyle='light-content'  />
               <Loader loading={loading} />
               <ImageBackground 
                    style = {Styles.active_bg_image} 
                    source = { require('../images/bg_acti.png')}
               >
               <Image source = {require('../images/logo.png')} style={LocalStyle.myLogo} />
               <Text style={LocalStyle.lblTxt}>Just one more step to get the App Working</Text>
                <View style={LocalStyle.sectionStyle}>
                    <AntDesign name = 'key' size = {20} style={LocalStyle.iconStyle} />
                    <TextInput 
                    placeholder='Enter Activation Code' 
                    style = {LocalStyle.txtInput}
                    secureTextEntry ={true} 
                    maxLength= {8}
                    onChangeText={ActCode => setActCode(ActCode)}
                    />
                </View>
                {errortext != '' ? (
              <Text style={{color: 'red', textAlign: 'center', fontSize: 10,}}> {errortext} </Text>
            ) : null}
                <TouchableOpacity 
                    style= {LocalStyle.submitButton}
                    onPress={handleSubmitPress}
                >
                    <Text style ={LocalStyle.SubmitTxt}>Activate</Text>
                </TouchableOpacity>
               </ImageBackground>
            </View>
        );
    }
    export default Activate