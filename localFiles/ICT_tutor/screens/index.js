import React, {Component, useState} from 'react';  
import {View,Text, ImageBackground, StatusBar, TouchableOpacity, ScrollView} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons'; 
import Styles from './homeStyles'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function HomeScreen ({navigation}){
    const [isLoading, setisLoading] = useState(false)
    setTimeout(() => {setisLoading(false)}, 1500);
        return(  
            <View style = {Styles.container}> 
            <StatusBar backgroundColor = '#b06801' barStyle='light-content'  />
            <ScrollView style = {Styles.tbOpacityScrollView}> 
                <ImageBackground 
                    source = { require('../images/background1.png')}
                    style = {Styles.bg_image} >
                    <Text style = {Styles.titleTxt}>COMPUTER {'\n'} TUTOR</Text>
                    <Text style = {Styles.subTitleTxt}>Your Step by Step Guide into Information Technology</Text>
                </ImageBackground>
                <View style = {Styles.tbOpacityView}>
                    <TouchableOpacity style = {Styles.tbOpacity} onPress = {()=> {setisLoading(true); navigation.navigate('GettingStart')}}>
                    <AntDesign name ="rocket1" size = {35}  />
                    <Text style = {Styles.tbOpacityTxt}> Getting Started</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.tbOpacity} onPress = {()=> {setisLoading(true);navigation.navigate('CertificateCourses')}}>
                    <AntDesign name ="edit" size = {35}  />
                    <Text style = {Styles.tbOpacityTxt}>Certificate Courses</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.tbOpacity} onPress = {() => navigation.navigate("DiplomaCourses")}>
                    <AntDesign name ="form" size = {35}  />
                    <Text style = {Styles.tbOpacityTxt}>Diploma Courses</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.tbOpacity} onPress = {()=> navigation.navigate('AdvanceDiploma')}>
                <AntDesign name ="alipay-circle" size = {35}  />
                    <Text style = {Styles.tbOpacityTxt}>Advance Diploma </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.tbOpacity} onPress = {() => navigation.navigate('SpecialProgramme')}>
                <Entypo name ="book" size = {35}  />
                    <Text style = {Styles.tbOpacityTxt}>Special Programme</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.tbOpacity} onPress = {() => navigation.navigate("ProfessionalCourses")}>
                <Entypo name ="check" size = {35}  />
                    <Text style = {Styles.tbOpacityTxt}>Professional Courses</Text>
                </TouchableOpacity>
                </View>
                <View style={Styles.buttonView}>
                    <Text style={Styles.buttonText}>Copyright @ Tivkpaa Modern Tech. 2020</Text>
                </View>
               </ScrollView> 
            </View>  
        )  
    } 
    HomeScreen.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(  
    <Icon name={focused ? 'ios-home' : 'md-home'} color={tintColor}   size={25} />  
        )  
}