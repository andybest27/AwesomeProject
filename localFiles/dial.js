import React, { Component } from 'react'
import { View, Text, Linking, TouchableOpacity, Platform, StyleSheet, Image, Dimensions,} from 'react-native'

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

class Home extends Component{
    constructor(props){
        super(props);
    }
    openDialScreen = () => {
        let number = '';
        if (Platform.OS === 'android') {
            number = 'tel:${08165628422}';
        }
        else {
            number = 'tel:${08085238032}';
        }
        Linking.openURL(number);
    };
    render(){
        return(
            <View style = {styles.container}>
            <Image source = {
                require('C:/Users/master/AwesomeProject/MyImages/Bennetto.png')
            }
            style = {
                {
                    width: DeviceWidth * 0.2,
                    height: DeviceWidth * 0.2,
                    resizeMode: 'contain'
                }
            }
            />
           <Text>______________________________</Text>
            <Text>Dani Please Click the Button</Text>
                <TouchableOpacity onPress={this.openDialScreen}>

                    <Text style = {styles.clickButton}>Click to Open Dial Screen</Text>
                    

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderStartColor: 'white',
        backgroundColor: '#dff2e8',
        },
    clickButton: {
        backgroundColor: '#065014',
        height: 40,
        marginTop: 20,
        alignItems: 'center',
        color: 'white',
        alignContent: 'center',
        padding: 10,
        borderRadius: 5,
    }
});
export default Home;