import React, {Component} from 'react';
import Activation from './localFiles/ICT_tutor/screens/activate'
import Main from './localFiles/ICT_tutor/Main'
import SplashScreen from './localFiles/ICT_tutor/screens/SplashScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { YellowBox, LogBox } from 'react-native';

	YellowBox.ignoreWarnings([
		'Require cycle:'
	]);

const AuthScreen = createStackNavigator({
  //Stack Navigator for authentication and Main Screen
  AuthScreen: {
    screen: Activation,
    navigationOptions: {
    headerShown: false,
    },
  },
});

/* Switch Navigator for those screens which needs to be switched only once
  and we don't want to switch back once we switch from them to the next one */
const App = createSwitchNavigator({
	SplashScreen: {
		/* SplashScreen which will come once for 5 Seconds */
		screen: SplashScreen,
		navigationOptions: {
			/* Hiding header for Splash Screen */
			headerShown: false,
		},
	},
	AuthScreen: {
		/* Auth Navigator which includer Activation will come once */
		screen: AuthScreen,
	},
	Main: {
		/* Navigation Drawer as a landing page */
		screen: Main,
		navigationOptions: {
			/* Hiding header for Navigation Drawer as we will use our custom header */
			headerShown: false,
		},
	},
});

export default createAppContainer(App);
