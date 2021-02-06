//Import React and Hooks we needed
import React, { useState, useEffect } from 'react';
import Styles from './homeStyles';
//Import all required component
import { ActivityIndicator, View, StyleSheet, Image, ImageBackground, StatusBar, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = props => {
  //State for ActivityIndicator animation
  let [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then(value =>
        props.navigation.navigate(
          value === null ? 'AuthScreen' : 'Main',
        )
      );
    }, 5000);
  }, []);

  return (
    
      <ImageBackground 
        source={require('../images/splashImage.jpeg')}
         style = {Styles.active_bg_image} 
      >
    <View style={styles.container}>
        <StatusBar backgroundColor = '#b06801' barStyle='light-content'  />
      <Image
        source={require('../images/logo.png')}
        style={{ width: '50%', resizeMode: 'contain'}}
      />
      <Text style={styles.lblTxt}>TMT Computer Tutor</Text>
      <Text style = {{color: 'orange', fontSize: 9}}>Version 1.0</Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
        </View>
      </ImageBackground>
  
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 100,
    marginBottom: 100,
  },
  lblTxt:{
    color: '#fff',
    fontSize: 20,
    fontFamily:'serif',
    fontWeight: 'bold',
  }
});