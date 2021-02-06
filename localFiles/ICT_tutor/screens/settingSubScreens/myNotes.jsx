import React, { Component} from 'react';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WriteNote from './writeNote';
import SavedNotes from './savedNote';

const Tab = createBottomTabNavigator();

export default function MyNotes() {
    return (
        <Tab.Navigator
                    tabBarOptions = {{
                    activeTintColor: '#000',
                    inactiveTintColor: '#b8b8b8',
                    indicatorStyle: {backgroundColor: '#000'},
                    labelStyle: {fontSize: 13},
                    showIcon: true,
                    style: {backgroundColor: '#fff'}}
                }
                backBehavior = 'order'
        >
            <Tab.Screen name = "Write Note" component={WriteNote} 
               options = {{tabBarIcon: ({ focused, size }) => <Entypo name={focused ? 'new-message' : 'edit'} size={20} color={focused ? '#000' : '#b8b8b8'} />}}
            />
            <Tab.Screen name = "Saved Note" component={SavedNotes} 
               options = {{tabBarIcon: ({ focused, size }) => <Entypo name={focused ? 'save' : 'drive'} size={20} color={focused ? '#000' : '#b8b8b8'} />}}
            />
        </Tab.Navigator>
    )
}