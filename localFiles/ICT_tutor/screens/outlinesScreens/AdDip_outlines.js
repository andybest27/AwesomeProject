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
              <Text style = {Styles.titleTxt}> ADVANCED DIPLOMA COURSES</Text>
              <Text style = {Styles.subTitleTxt}>Course Outline for Advanced Diploma Students</Text>
          </ImageBackground>
          <View style = {Styles.tbOpacityView}>
            <TouchableOpacity style = {Styles.tbOpacity}>
                    <Entypo name ="colours" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Graphic Designing</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity}>
                    <Entypo name ="code" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}>Intro. to Programing</Text>
              </TouchableOpacity>
             <TouchableOpacity style = {Styles.tbOpacity} >
                    <AntDesign name ="play" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Video Editing</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <Entypo name ="tools" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Computer Maintenance </Text>
              </TouchableOpacity>
          </View>
      </ScrollView>
      <View style={Styles.buttonView}>
          <Text style={Styles.buttonText}>Copyright @ Tivkpaa Modern Tech. 2020</Text>
        </View>
    </View>
  );
};
export default Cert_outlines;