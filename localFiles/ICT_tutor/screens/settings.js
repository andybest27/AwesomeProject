    import React, {Component} from 'react';
    import Settings from './settingSubScreens/settings_contents.js';
    import Search from './settingSubScreens/search';
    import MyNotes from './settingSubScreens/myNotes';
    import { createStackNavigator } from '@react-navigation/stack';
   
   const Stack = createStackNavigator();

    export default function SettingStack({navigation}) {
        return(
           <Stack.Navigator initialRouteName = 'Setting'>
                <Stack.Screen
                    name = "Setting"
                    component={Settings}
                    options={{
                        title: 'Setting',
                        headerStyle:{backgroundColor: '#064155'},
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen
                   name="Search" 
                        component={Search}
                        options={{
                            title: 'Search',
                            headerStyle: { backgroundColor: '#064155'},
                            headerTintColor: '#fff', 
                            } }
                />
                <Stack.Screen
                   name="MyNotes" 
                        component={MyNotes}
                        options={{
                            title: 'MyNotes',
                            headerStyle: { backgroundColor: '#064155'},
                            headerTintColor: '#fff', 
                            } }
                />
           </Stack.Navigator>
        );
    }