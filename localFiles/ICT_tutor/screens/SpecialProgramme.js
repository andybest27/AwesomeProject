import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SpecialClass_outlines from './outlinesScreens/SpecialClass_outlines';
const Stack = createStackNavigator();
const SpecialProgramme = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName ="Home">
        <Stack.Screen 
        name="Dip_Home" 
        component={SpecialClass_outlines}
         options={{
          title: 'Home',
          headerStyle: { backgroundColor: '#064155'},
          headerTintColor: '#fff', 
          } }
    />
    </Stack.Navigator>
  );
};

export default SpecialProgramme;
