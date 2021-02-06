    import React, {Component} from 'react';  
    import {View,Text, ScrollView, Alert, Linking, ImageBackground, TouchableOpacity} from 'react-native'; 
    import { Entypo } from '@expo/vector-icons';
    import Styles from './homeStyles'
    export default class ExerciseScreen extends Component{
         openWhatsappUrl = () => {
             const url = 'whatsapp://send?phone=+2348164790120';
             Linking.canOpenURL(url).then((supported) => {
                 if (supported) {
                     Linking.openURL(url);
                 } else {
                     Alert.alert('Notice', 'WhatsApp is not installed', );
                 }
             });
         };
        render(){  
            return(  
                <View style = {Styles.container}>  
                   <ScrollView style = {Styles.tbOpacityScrollView}> 
                    <ImageBackground 
                        source = { require('../images/background1.png')}
                        style = {Styles.bg_image} >
                        <Text style = {Styles.titleTxt}>COMPUTER {'\n'} TUTOR</Text>
                        <Text style = {Styles.subTitleTxt}>Exercises to test your Learning Progress</Text>
                    </ImageBackground>
                   <TouchableOpacity 
                    style={Styles.TWFeedback}
                    onPress = {()=> this.openWhatsappUrl()}
                    >
                       <Text style={Styles.btn_text}><Entypo name='upload' size={20} color = '#fff' />     Submit Exercise To Whatsapp</Text>
                   </TouchableOpacity>
                    <View style = {Styles.exerciseDiv} >
                    <Text style = {Styles.exer_header}>Exercise CI101</Text>
                    <Text>
                        1. State in clear term what you understand my a Computer System. {'\n'}{'\n'}
                        2. Outline five (5) Advantages of Computer in modern days.{'\n'}{'\n'}
                        3. Differentiate between Arithmetic operations and Logical operations{'\n'}{'\n'}
                        4. List and explain the basic parts of a computer{'\n'}{'\n'}
                        5. Differentiate (with the steps involve) between cold and warm booting.{'\n'}{'\n'}
                        6. Convert 2.5GB to KB.
                    </Text>
                    </View>
                    <View style = {Styles.exerciseDiv} >
                    <Text style = {Styles.exer_header}>Exercise CF201</Text>
                    <Text>
                        1. What Is an Electronic Filing System? {'\n'}{'\n'}
                        2. Outline six (6) Benefits of Computer Filing System.{'\n'}{'\n'}
                        3. How do you create computerized filing system {'\n'}{'\n'}
                        4. List the steps taken to create a folder on a computer system.{'\n'}{'\n'}
                        5. How do you name files on your computer?{'\n'}{'\n'} 
                        6. What are the basic things to consider while naming a file?.
                    </Text>
                    </View>
                    <View style = {Styles.exerciseDiv} >
                    <Text style = {Styles.exer_header}>Exercise CD301</Text>
                    <Text>
                        1. What Is Desktop publishing (DTP)? {'\n'}{'\n'}
                        2. Outline six (8) things achievable with Desktop publishing (DTP).{'\n'}{'\n'}
                        3. Explain the four (4) comparisons of DTP. {'\n'}{'\n'}
                        4. Briefly explain the present and future of DTP.{'\n'}{'\n'}
                        5. What are the advantages of DTP?{'\n'}{'\n'} 
                        6. Outline 4 limitations of DTP?
                    </Text>
                    </View>
                    <View style = {Styles.exerciseDiv} >
                    <Text style = {Styles.exer_header}>Exercise CT401</Text>
                    <Text>
                        Student is require to practice typing using Mavis Beacon for at least 3 Months.
                    </Text>
                    </View>
                    </ScrollView>
                </View>  
            )  
        }  
    }
