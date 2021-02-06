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
              <Text style = {Styles.titleTxt}> SPECIAL PROGRAMMES</Text>
              <Text style = {Styles.subTitleTxt}>Our Special Programmes for Skills and Moral Ethics</Text>
          </ImageBackground>
          <View style = {Styles.tbOpacityView}>
              <TouchableOpacity style = {Styles.tbOpacity}>
                    <Entypo name ="code" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}>Computer Programing</Text>
              </TouchableOpacity>
             
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <Entypo name ="flow-branch" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Computer Networking </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <Entypo name ="smashing" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Data Analysis (ISSP) </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {Styles.tbOpacity} >
                    <Entypo name ="database" size = {30}  />
                    <Text style = {Styles.tbOpacityTxt}> Database Management</Text>
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