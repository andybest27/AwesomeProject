    import React from 'react';  
    import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
    import {HomeScreen, ExercisesScreen, SettingScreen} from './Components'    
    import { AntDesign } from '@expo/vector-icons';
    import Icon from 'react-native-vector-icons/Ionicons';
    import { Entypo } from '@expo/vector-icons';
     const Tab = createMaterialTopTabNavigator();
     export default function MyTabs(){
         return(
             <Tab.Navigator
             tabBarPosition = "top"
                    tabBarOptions = {{
                    activeTintColor: 'white',
                    inactiveTintColor: '#c7c7c7',
                    indicatorStyle: {backgroundColor: 'orange'},
                    labelStyle: {fontSize: 15},
                    showIcon: true,
                    style: {backgroundColor: '#000'}}
                }
                backBehavior = 'order'
             >
                <Tab.Screen name = "Home" component={HomeScreen} 
                    options = {{tabBarIcon: ({ focused, size }) => <AntDesign name={focused ? 'home' : 'home'} size={20} color={focused ? '#fff' : '#c7c7c7'} />}}
                />
                <Tab.Screen name = "Exercises" component={ExercisesScreen} 
                     options = {{tabBarIcon: ({ focused, size }) => <Entypo name={focused ? 'document' : 'documents'} size={20} color={focused ? '#fff' : '#c7c7c7'} />}}
                />
                <Tab.Screen name = "Settings" component={SettingScreen} 
                    options = {{tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'ios-settings' : 'md-settings'} size={20} color={focused ? '#fff' : '#c7c7c7'} />}}
                />
             </Tab.Navigator>
         )
     }