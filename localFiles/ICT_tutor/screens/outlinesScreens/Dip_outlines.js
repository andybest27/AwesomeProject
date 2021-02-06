import React from "react";
import { View, StyleSheet, ScrollView, Text, ImageBackground, TouchableOpacity } from "react-native";
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
              <Text style = {Styles.titleTxt}>DIPLOMA COURSES</Text>
              <Text style = {Styles.subTitleTxt}>Course Outline for Diploma Students</Text>
          </ImageBackground>
          <View style = {Styles.tbOpacityView}>
            <TouchableOpacity style = {Styles.tbOpacity}>
                    <Entypo name ="colours" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Computer Graphic</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity}>
                    <Entypo name ="blackboard" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}>Microsoft Publisher </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <AntDesign name ="ie" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Internet </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <AntDesign name ="picture" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}>Intro. to Photo Editing</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <AntDesign name ="tool" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Intro. to System Repair  </Text>
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