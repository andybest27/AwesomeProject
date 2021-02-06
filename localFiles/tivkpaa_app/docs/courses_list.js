import React from 'react';
import { Text, View, Button, StyleSheet,TouchableNativeFeedback, Dimensions, StatusBar, TouchableOpacity, ScrollView, Image, } from "react-native";
import style from './course_menu_style';
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
//import ToolbarAndroid from '@react-native-community/cli-platform-android';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default class App extends React.Component {

  render() {
    return (
        <ScrollView>
            <TouchableOpacity style={style.course_items} onPress = {()=> navigation.navigate('ictBasics', { screen: 'ICTContents' })}>
              <View>
                  <FontAwesome name = 'desktop' size = {42} color = '#fff' />
              </View>
              <View>
                <Text Text Text style = { style.course_items_text } > ICT Basics </Text>
              <Text style= {style.course_items_toNum}>10 Topics all read</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.course_items}>
              <View>
                  <FontAwesome name = 'paint-brush' size = {42} color = '#fff' />
              </View>
              <View>
                <Text style= {style.course_items_text}>Graphic Suites</Text>
                <Text style= {style.course_items_toNum}>16 Topics 2 read</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.course_items}>
              <View>
                  <FontAwesome name = 'cloud-upload' size = {42} color = '#fff' />
              </View>
              <View>
                <Text style= {style.course_items_text}>Cloud Computing</Text>
              <Text style= {style.course_items_toNum}>24 Topics 0 read</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.course_items}>
              <View>
                  <Entypo name = 'power-plug' size = {42} color = '#fff' />
              </View>
              <View>
                <Text style= {style.course_items_text}>Basic Electronics</Text>
              <Text style= {style.course_items_toNum}>13 Topics 1 read</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.course_items}>
                <View>
                  <AntDesign name = 'videocamera' size = {42} color = '#fff' />
                </View>
              <View>
                <Text style= {style.course_items_text}>CCTV Installations</Text>
                <Text style= {style.course_items_toNum}>8 Topics 0 read</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.course_items}>
                <View>
                  <Entypo name = 'code' size = {42} color = '#fff' />
                </View>
                <View>
                    <Text style= {style.course_items_text}>Web Designing</Text>
                    <Text style= {style.course_items_toNum}>10 Topics 3 read</Text>   
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.course_items}>
                <View>
                  <Ionicons name = 'ios-book' size = {42} color = '#fff' />
                </View>
                <View>
                  <Text style= {style.course_items_text}>Christian Ethics</Text>
                  <Text style= {style.course_items_toNum}>15 Topics 7 read</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.course_items}>
                <View>
                  <AntDesign name = 'shoppingcart' size = {42} color = '#fff' />
                </View>
                <View>
                  <Text style= {style.course_items_text}>ENT Development</Text>
                  <Text style= {style.course_items_toNum}>5 Topics 0 read</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.course_items}>
                <View>
                  <AntDesign name = 'wordfile1' size = {42} color = '#fff' />
                </View>
                <View>
                  <Text style= {style.course_items_text}>Word Processing</Text>
                  <Text style= {style.course_items_toNum}>8 Topics 1 read</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.course_items}>
                <View>
                  <AntDesign name = 'database' size = {42} color = '#fff' />
                </View>
                <View>
                  <Text style= {style.course_items_text}>Data Management</Text>
                  <Text style= {style.course_items_toNum}>16 Topics 5 read</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
      
    )
  }
}