import React from "react";
import { View, ScrollView, Text, ImageBackground, TouchableOpacity } from "react-native";
import Styles from '../homeStyles'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Cert_outlines = ({navigation}) => {
  return (
    <View style = {Styles.container}>
      <ScrollView style = {Styles.tbOpacityScrollView}>
          <ImageBackground 
              source = { require('../../images/background2.png')}
              style = {Styles.bg_image} >
              <Text style = {Styles.titleTxt}>CERTIFICATE COURSES</Text>
              <Text style = {Styles.subTitleTxt}>Course Outline for Certificate Students</Text>
          </ImageBackground>
          <View style = {Styles.tbOpacityView}>
            <TouchableOpacity style = {Styles.tbOpacity} onPress = {()=> navigation.navigate('introToComputer')} >
                    <AntDesign name ="iconfontdesktop" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Introduction to Computer</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} onPress = {()=> navigation.navigate('fillingSystem')}>
                    <AntDesign name ="folderopen" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Filling System </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} onPress = {()=> navigation.navigate('desktopPublishing')}>
                    <Entypo name ="publish" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Desktop Publishing  </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} onPress = {()=> navigation.navigate('typingSkills')}>
                    <Entypo name ="keyboard" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Typing Skills  </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} onPress = {()=> navigation.navigate('microsoft')}>
                    <AntDesign name ="wordfile1" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Microsoft Office  </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <AntDesign name ="API" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Introduction to CorelDraw  </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <AntDesign name ="ie" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Internet  </Text>
              </TouchableOpacity>
          </View>
          <View style={Styles.buttonView}>
                    <Text style={Styles.buttonText}>Copyright @ Tivkpaa Modern Tech. 2020</Text>
                </View>
      </ScrollView>
    </View>
  );
};
export default Cert_outlines;