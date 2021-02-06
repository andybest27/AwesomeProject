import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import SwitchExample from './localFiles/switch.js';
export default class HomeContainer extends Component {
		constructor() {
			super();
			this.state = { switch1Value: false, }
		}
		toggleSwitch1 = (value) => {
			this.setState({ switch1Value: value })
			console.log('Switch 1: ' + value)
		}
		render() {
				return (
						<View>
							<SwitchExample
							toggleSwitch1 = {this.toggleSwitch1}
							switch1Value = {this.state.switch1Value}
							/>
						</View>
					);
				}
}