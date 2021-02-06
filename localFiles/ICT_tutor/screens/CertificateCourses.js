import React, {Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Cert_outlines from './outlinesScreens/Cert_outlines';
import introToComputer from '../screens/cert_subScreens/introToComputer';
import fillingSystem from '../screens/cert_subScreens/fillingSystem';
import desktopPublishing from '../screens/cert_subScreens/desktopPublishing';
import typingSkills from '../screens/cert_subScreens/typingSkills';
import microsoft from '../screens/cert_subScreens/microsoft';
const Stack = createStackNavigator();
export default function CertStack() {
      return(
            <Stack.Navigator initialRouteName ="Home">
                    <Stack.Screen 
                        name="Cert_Home" 
                        component={Cert_outlines}
                        options={{
                            title: 'Home',
                            headerStyle: { backgroundColor: '#064155'},
                            headerTintColor: '#fff', 
                            } }
                  />
                  <Stack.Screen 
                        name="introToComputer" component={introToComputer}
                        options={{
                            title: 'introToComputer',
                            headerStyle: { backgroundColor: '#064155'},
                            headerTintColor: '#fff', 
                            } }
                  />
                  <Stack.Screen 
                        name = "fillingSystem" component={fillingSystem}
                        options={{
                              title: 'fillingSystem',
                              headerStyle: {backgroundColor: '#064155'},
                              headerTintColor: '#fff',
                        }}
                  />
                  <Stack.Screen 
                        name = "desktopPublishing" component={desktopPublishing}
                        options={{
                              title: 'desktopPublishing',
                              headerStyle: {backgroundColor: '#064155'},
                              headerTintColor: '#fff',
                        }}
                  />
                  <Stack.Screen 
                        name = "typingSkills" component={typingSkills}
                        options={{
                              title: 'typingSkills',
                              headerStyle: {backgroundColor: '#064155'},
                              headerTintColor: '#fff',
                        }}
                  />
                  <Stack.Screen 
                        name = "microsoft" component={microsoft}
                        options={{
                              title: 'microsoft',
                              headerStyle: {backgroundColor: '#064155'},
                              headerTintColor: '#fff',
                        }}
                  />
            </Stack.Navigator>
      )
}