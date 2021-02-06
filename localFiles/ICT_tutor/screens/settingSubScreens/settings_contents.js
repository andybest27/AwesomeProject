import React, { Component, } from 'react'
import { Text, View, BackHandler, ToastAndroid, TouchableOpacity, ScrollView, ImageBackground, Alert} from 'react-native'
import styles from './setting_style'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {onShare, RateApp} from '../../StackHome'
import Styles from '.././homeStyles';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

class myState extends Component{
  state = {
    setModalVisible: false,
    value: "Exercise Has been cleared",
  }

  _handleModal = () => {
    const {
      isVisible
    } = new myState().state;
    this.setState({
      setModalVisible: false
    });
  }

  _showToast = (value) => {
    ToastAndroid.show(value, ToastAndroid.SHORT);
  }
}

const SettingsScreen = ({navigation})=>{
 function backPressed() {
		Alert.alert('Exit App','Do you want to exit?',
			[{ text: 'No'}, { text: 'Yes', onPress: () => BackHandler.exitApp()},],
			{ cancelable: false }	);
		return true;
	}

 return(
    <View style = {Styles.container}>  
          <ScrollView style = {Styles.tbOpacityScrollView}>
              <ImageBackground 
                 source = { require('../../images/background1.png')}
                 style = {Styles.bg_image} >
                 <Text style = {Styles.titleTxt}>COMPUTER {'\n'} TUTOR</Text>
                 <Text style = {Styles.subTitleTxt}>Follow the steps below to set your App Preference </Text>
              </ImageBackground>     
      <View style = {styles.container}>
              <View style = {styles.settingBG}>
                 <TouchableOpacity onPress = { () => {new myState()._showToast('Read history has been cleared')}} >
                    <Text style = {styles.setting_link}><Entypo name='back-in-time' size = {20} />      Clear Read History</Text>
                  </TouchableOpacity>



                  <TouchableOpacity  onPress = {() =>{new myState()._showToast('Exercise has been cleared')}}>
                    <Text style = {styles.setting_link} ><AntDesign name = 'book' size = {20} />      Clear Exercise Record</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {()=> navigation.navigate('Search')}>
                    <Text style = {styles.setting_link}><Entypo name='magnifying-glass' size = {20} />      Search</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress = {() => navigation.navigate('MyNotes')}>
                    <Text style = { styles.setting_link } > <Entypo name = 'new-message' size = {20} />      My Notes</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={()=> RateApp()}>
                    <Text style = {styles.setting_link} > <AntDesign name = 'star' size = {20} />      Rate us on Playstore</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {()=> onShare()}>
                    <Text style = {styles.setting_link} > <AntDesign name = 'sharealt' size = {20} />      Share App With Friends</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => backPressed()}>
                    <Text style = {styles.setting_link} > <AntDesign name = 'poweroff' size = {20} />      Exit Application</Text>
                  </TouchableOpacity>
            </View>
      </View>
      <View style={Styles.buttonView}>
      <Text style={Styles.buttonText}>Copyright @ Tivkpaa Modern Tech. 2020</Text>
      </View>
      </ScrollView>
      </View>  
    )
  }
  export default SettingsScreen