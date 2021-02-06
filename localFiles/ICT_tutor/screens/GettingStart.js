import React from "react";
import { View, StyleSheet, ScrollView, Text, ImageBackground } from "react-native";
import Styles from './homeStyles'

const GettingStart = ({navigation}) => {
  return (
    <View style = {Styles.container}>
      <ScrollView style = {Styles.tbOpacityScrollView}>
          <ImageBackground 
              source = { require('../images/background2.png')}
              style = {Styles.bg_image} >
              <Text style = {Styles.titleTxt}>INTRODUCTION</Text>
              <Text style = {Styles.subTitleTxt}>Getting Started With the Computer Tutor</Text>
          </ImageBackground>
          <Text style={{fontFamily:'serif', fontSize: 16, textAlign: 'justify', marginLeft: 10, marginRight: 10, lineHeight: 25, }}>
            As the world is rapidly becoming a global village, Information and Communication Technology (ICT) knowledge have become a necessity
            for everyone in the society today; ICT knowledge will ease our daily endeavors, increase productivity in our industries, reduces the work force and also reduces the cost of production in the labour market. Hence there’ s need
            for everyone to acquire this knowledge irrespective of age, gender, academic or financial status, and race.{'\n'}{'\n'}
            At Tivkpaa Modern Technology, we do not only train people in ICT but we create opportunities
            for our students who give us the opportunity to indoctrinate them of this compulsory skills.{'\n'}{'\n'}To ease the acquisition of ICT skills, TMT has developed this Mobile Application to help her students have the opportunity to learn and practice computing handy at any time.{'\n'}{'\n'}
            This mobile application contained rich ICT study materials and tutorials which any student can honestly rely on it with little help from the instructor to master computing. This app is to serve as only a guide, meaning students still need a personal computer to practice what he or she have learned so far.
            This application is in chapters ranging from certificate courses to professional courses and sub-chapters under these main chapter– containing at least what it takes to master each of these courses.
            At the end of every chapter, there is a reference to a particular study exercise. Students are require to visit the exercise section and take these exercises serious as they will help determine the level of student’ s understanding of the particular course. These exercises are compulsory with instructions from the instructor.
            {'\n'}
          </Text>
      </ScrollView>
    </View>
  );
};
export default GettingStart;
