import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Dip_outlines from './outlinesScreens/Dip_outlines';
const Stack = createStackNavigator();
const DiplomaCourses = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName ="Home">
              <Stack.Screen 
              name="Dip_Home" 
              component={Dip_outlines}
              options={{
                title: 'Home',
                headerStyle: { backgroundColor: '#064155'},
                headerTintColor: '#fff', 
              } }
    />
    </Stack.Navigator>
  );
};
export default DiplomaCourses;
