import React from "react";
import { View, StyleSheet, ScrollView, Text, ImageBackground, TouchableOpacity } from "react-native";
import Styles from '../homeStyles'
import { Entypo, FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';
const Cert_outlines = ({navigation}) => {
  return (
    <View style = {Styles.container}>
      <ScrollView style = {Styles.tbOpacityScrollView}>
           <ImageBackground 
              source = { require('../../images/background2.png')}
              style = {Styles.bg_image} >
              <Text style = {Styles.titleTxt}> PROFESSIONAL COURSES</Text>
              <Text style = {Styles.subTitleTxt}>Our Professional Courses for Graduates and Computer Experts</Text>
          </ImageBackground>
          <View style = {Styles.tbOpacityView}>
            <TouchableOpacity style = {Styles.tbOpacity}>
                    <Entypo name ="colours" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}>Mst. Computer Graphics</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity}>
                    <Entypo name ="code" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}>Mst. Computer Programing</Text>
              </TouchableOpacity>
             <TouchableOpacity style = {Styles.tbOpacity} >
                    <FontAwesome name ="eye" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Artificial Intelligence</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <FontAwesome5 name ="network-wired" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Mst. Computer Networking</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <Entypo name ="tools" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}>Data Mining</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <FontAwesome name ="lightbulb-o" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> General Electronics</Text>
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