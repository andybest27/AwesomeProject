import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button, TextInput, StyleSheet } from 'react-native';
class ShowPassword extends Component{
	state = {
			password: '',
			isPasswordVisible: true,
			toggleText: 'Show',
	 }
	handleToggle = () => {
		const {isPasswordVisible} = this.state;
		if(isPasswordVisible){
			this.setState({
				isPasswordVisible: false
			});
			this.setState({toggleText: 'Hide'});
		}else{
			this.setState({ isPasswordVisible: true });
			this.setState({toggleText: 'Show'});
		}
	};
	render(){
		return(
			<View style = {style.container}>
				<TextInput placeholder ={'Enter Your Password'} secureTextEntry={this.state.isPasswordVisible} style = {{width: 300, padding: 5, height: 40, backgroundColor: '#a7a6a9', color: 'white', fontSize: 20,}} />
				<Button
					title={this.state.toggleText}
					onPress = {this.handleToggle}
				 />
			</View>

		)
	}
}
export default ShowPassword

const style = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})