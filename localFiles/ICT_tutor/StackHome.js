import React, {Component } from 'react'
import {Image, TouchableOpacity, Text, Alert, Linking, Share} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './router';
import { AntDesign, Entypo } from '@expo/vector-icons';
import {Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

import { GettingStart, CertificateCourses, ProfessionalCourses, SpecialProgramme, AdvanceDiploma, DiplomaCourse } from './Components';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();
function getHeaderTitle(route){
    const routeName = getFocusedRouteNameFromRoute(route)?? 'Home'
    switch(routeName){
        case 'introToComputer':
            return 'Introduction To Computer';
        case 'fillingSystem':
            return 'Filling System';
        case 'desktopPublishing':
            return 'Desktop Publishing';
        case 'typingSkills': 
            return 'Typing Skills';
        case 'microsoft':
            return 'Introduction to MS Office';
    }
};
 const VisitOurWeb = async () => {
     const url = 'https://www.tivkpaamoderntech.com';
     Linking.canOpenURL(url).then((supported) => {
         if (supported) {
             Linking.openURL(url);
         } else {
             Alert.alert('Notice', 'No suitable app to open link', );
         }
     });
 };
 export const deactivate = async () =>{
      Alert.alert(
        'Deactivate',
        'Are you sure? You want to Deactivate this App?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              return null;
            },
          },
          {
            text: 'Confirm',
            onPress: () => {
              AsyncStorage.clear();
              Alert.alert('', 'App Deactivated please Restart');
            },
          },
        ],
        { cancelable: false }
      );
 };
export const RateApp = async () => {
      const url = 'https://play.google.com/store/apps/';
      Linking.canOpenURL(url).then((supported) => {
          if (supported) {
              Linking.openURL(url);
          } else {
              Alert.alert('Notice', 'Please Install PlayStore', );
          }
      });
  };
export const onShare = async ()=>{
    try {
        const result = await Share.share({
            title: 'App link',
            message: 'Please install this app and stay safe https://play.google.com/store/apps',
            url: 'xender'
        });
        if(result.action==Share.sharedAction){
            if(result.activityType){
                //shared with activity type of result.activityTyp
            }else{
                //shared
            }            
        } else if (result.action == Share.dismissedAction) {
           Alert.alert('Share', 'Please share App with Friends');
        }
    } catch (error) {
      Alert.alert(error.message)  
    }
}
export default function StackHome() {
        return(
                <NavigationContainer>
                <Stack.Navigator initialRouteName ="Home">
                    <Stack.Screen name="Home" component={AppNavigator}
                        options={{
                            title: 'Tivkpaa Modern Tech.',
                            headerStyle: {
                            backgroundColor: '#754801'
                            },
                            headerTintColor: '#fff', 
                            headerLeft: () => <Image source = {require('../ICT_tutor/images/logo.png')} style ={{marginLeft: 10, height: 36.5, width:27.8}} />,
                            headerRight: ()=> <TouchableOpacity>
                            <Menu>
                                <MenuTrigger>
                                    <Entypo name = 'dots-three-vertical' size = {20} color = '#fff' style={{marginRight: 10,}} />
                                </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption onSelect = {onShare}>
                                            <Text><AntDesign name = 'sharealt' size = {15}/>    Share App</Text>
                                        </MenuOption>
                                        <MenuOption onSelect={RateApp}>
                                            <Text><AntDesign name = 'star' size = {15}/>    Rate App</Text>
                                        </MenuOption>
                                        <MenuOption onSelect ={VisitOurWeb}>
                                            <Text><Text><AntDesign name = 'ie' size = {15}/>    Visit Our Website</Text></Text>
                                        </MenuOption>
                                        <MenuOption onSelect ={deactivate}>
                                            <Text><Text><AntDesign name = 'logout' size = {15}/>    Deactivate App</Text></Text>
                                        </MenuOption>
                                    </MenuOptions>
                            </Menu>
                            </TouchableOpacity>
                            } 
                            }
                  />
                 <Stack.Screen name="GettingStart" component={GettingStart}
                    options={{
                        title: 'Getting Started',
                        headerStyle: {
                        backgroundColor: '#754801'
                        },
                        headerTintColor: '#fff', 
                        } }
                    />   
                <Stack.Screen name="CertificateCourses" component={CertificateCourses}
                    options={({route})=>({
                       headerTitle: getHeaderTitle(route),
                       title: 'Certificate Courses',
                        headerStyle: {
                        backgroundColor: '#754801'
                        },
                        headerTintColor: '#fff', 
                        })}
                    />
                 <Stack.Screen name="ProfessionalCourses" component={ProfessionalCourses}
                    options={{
                        title: 'Professional Courses',
                        headerStyle: {
                        backgroundColor: '#754801'
                        },
                        headerTintColor: '#fff', 
                        }}
                    />
                  <Stack.Screen name="DiplomaCourses" component={DiplomaCourse}
                    options={{
                        title: 'Diploma Courses',
                        headerStyle: {
                        backgroundColor: '#754801'
                        },
                        headerTintColor: '#fff', 
                        }}
                    />      
                    <Stack.Screen name="AdvanceDiploma" component={AdvanceDiploma}
                    options={{
                        title: 'Advance Diploma Courses',
                        headerStyle: {
                        backgroundColor: '#754801'
                        },
                        headerTintColor: '#fff', 
                        }}
                    />  
                    <Stack.Screen name="SpecialProgramme" component={SpecialProgramme}
                    options={{
                        title: 'Special Programme',
                        headerStyle: {
                        backgroundColor: '#754801'
                        },
                        headerTintColor: '#fff', 
                        }}
                    />          
                </Stack.Navigator>
                </NavigationContainer>
        )
    }