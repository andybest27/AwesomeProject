import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import SettingsScreen from './localFiles/tivkpaa_app/settings';
import CoursesScreen from './localFiles/tivkpaa_app/courses_menu';
import ictBasic from './localFiles/tivkpaa_app/ict_basics_list';

//functions


const MyTheme = {
	dark: false,
  	colors: {
		card: '#a0cedd',
		primary: '#2a70be',
		background: '#ffffff00'

  	},
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
	export default function App({navigation}) {
		return (
			<NavigationContainer theme={MyTheme}>
				<Drawer.Navigator initialRouteName="Go Back To Courses">
					<Drawer.Screen
						name="Go Back To Courses"
						component={CoursesScreen}
						options={{ drawerIcon: ({ focused, size }) => <AntDesign name="bars" size={20} color="#2a70be" />,
						}}
					/>
					<Drawer.Screen
						name="Settings"
						component={SettingsScreen}
						options={{ drawerIcon: ({ focused, size }) => <AntDesign name="setting" size={20} color="#2a70be" />,
						}}
					/>
					<Drawer.Screen 
						name = "ictBasics"
						component = {ictBasic}
						display = {'hide'}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
		);
	}

