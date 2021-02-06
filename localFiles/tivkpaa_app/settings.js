import React, { Component, } from 'react'
import { Text, View, StatusBar, BackHandler, ToastAndroid, TouchableOpacity, Button, Modal, TouchableHighlight, Alert } from 'react-native'
import styles from './setting_style'
import {FontAwesome} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


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

export default function SettingsScreen({navigation}){
 function backPressed() {
		Alert.alert(
			'Exit App',
			'Do you want to exit?',
			[
				{ text: 'No'},
				{ text: 'Yes', onPress: () => BackHandler.exitApp() },
			],
			{ cancelable: false }
		);
		return true;
	}

 return(
           
      <View style = {styles.container}>
        <StatusBar barStyle = 'default' hidden = {false} backgroundColor = '#0678a7' translucent = {true} />
            <View>
              <Modal  animationType="slide"
                      transparent={true}
                      visible={new myState().state.setModalVisible}
                      onRequestClose={() => {
                      }}
                      >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Upload Course - xml file only</Text>
                          
                          <View View style = { styles.modalButton } >
                          <TouchableHighlight onPress={() => { new myState().state._handleModal()  }} >                           
                              <Text style = {styles.textStyle}><FontAwesome name='save' size = {18} />  Save</Text>
                           </TouchableHighlight>
                           <TouchableHighlight onPress={() => { new myState().state._handleModal()  }} >                           
                              <Text style = { styles.textStyle} > <AntDesign name = 'close' size = { 18 } />  Dismiss </Text>
                           </TouchableHighlight>
                          </View>
                          
                        </View>
                      </View>
              </Modal>
            </View>
            <View style = {styles.titleBar}>
              <TouchableOpacity onPress = { () => navigation.navigate('Go Back To Courses')               } >
                <AntDesign name = 'arrowleft' size = {20} color = '#fff' />
              </TouchableOpacity>
              <Text style = {styles.titleBar_txt}>Settings</Text>
              <Text><Entypo name = 'dots-three-vertical' size = {20} color = '#fff' /> </Text>
            </View>
            
            <View style = {styles.settingBG}>
                 <TouchableOpacity onPress = { () => {new myState()._showToast('Read history has been cleared')}} >
                    <Text style = {styles.setting_link}><Entypo name='back-in-time' size = {20} />      Clear Read History</Text>
                  </TouchableOpacity>



                  <TouchableOpacity  onPress = {() =>{new myState()._showToast('Exercise has been cleared')}}>
                    <Text style = {styles.setting_link} ><AntDesign name = 'book' size = {20} />      Clear Exercise Record</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => {new myState().setState({setModalVisible: true}) }}>
                    <Text style = {styles.setting_link}><AntDesign name='exclefile1' size = {20} />      Load Courses from local XML file</Text>
                  </TouchableOpacity>

                  <TouchableOpacity >
                    <Text style = {styles.setting_link}><Entypo name='magnifying-glass' size = {20} />      Search</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity>
                    <Text style = { styles.setting_link } > <Entypo name = 'new-message' size = {20} />      My Notes</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity >
                    <Text style = {styles.setting_link} > <AntDesign name = 'star' size = {20} />      Rate us on Playstore</Text>
                  </TouchableOpacity>

                  <TouchableOpacity >
                    <Text style = {styles.setting_link} > <AntDesign name = 'sharealt' size = {20} />      Share App With Friends</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => backPressed()}>
                    <Text style = {styles.setting_link} > <AntDesign name = 'poweroff' size = {20} />      Exit Application</Text>
                  </TouchableOpacity>

            </View>
            <Button title = 'HOME' color = '#065272' />
      </View>
    )
  }