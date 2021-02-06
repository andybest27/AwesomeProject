import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const SubTitle = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '100'
  }
});
export default SubTitle;