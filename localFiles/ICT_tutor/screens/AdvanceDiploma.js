import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import AdDip_outlines from './outlinesScreens/AdDip_outlines';
const Stack = createStackNavigator();
const AdvanceDiploma = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName ="Home">
              <Stack.Screen 
              name="AdDip_Home" 
              component={AdDip_outlines}
              options={{
                title: 'Home',
                headerStyle: { backgroundColor: '#064155'},
                headerTintColor: '#fff', 
              } }
    />
    </Stack.Navigator>
  );
};
export default AdvanceDiploma;
