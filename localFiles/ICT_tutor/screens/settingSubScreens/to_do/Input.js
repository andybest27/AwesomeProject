import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { inputPlaceholder } from './Colors';
const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
  <TextInput
    style={styles.input}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder="Type here to add note."
    placeholderTextColor={inputPlaceholder}
    multiline={true}
    autoCapitalize="sentences"
    underlineColorAndroid="transparent"
    selectionColor={'#a6a8a8'}
    returnKeyType='done'
    autoFocus = {true}
    autoCorrect={true}
    blurOnSubmit={true}
    onSubmitEditing={onDoneAddItem}
  />
);
const styles = StyleSheet.create({
  input: {
    padding: 5,
    fontSize: 20,
    color: '#000',
    fontWeight: '100'
  }
});
export default Input;