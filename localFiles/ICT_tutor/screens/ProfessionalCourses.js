import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Prof_outlines from './outlinesScreens/Prof_outlines';
const Stack = createStackNavigator();
const ProfessionalCourses = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName ="Home">
              <Stack.Screen 
              name="Dip_Home" 
              component={Prof_outlines}
              options={{
                title: 'Home',
                headerStyle: { backgroundColor: '#064155'},
                headerTintColor: '#fff', 
              } }
    />
    </Stack.Navigator>
  );
};
export default ProfessionalCourses;
