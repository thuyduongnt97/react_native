import React from 'react';
import { View, Platform, StyleSheet, TextInput } from 'react-native';

import { fonts, colors } from '../styles';

const RNSTextInput = ({
  type,
  dark,
  style,
  placeholderTextColor,
  ...restProps
}) => {
  
  return (
    <TextInput 
      placeholder="Your Password"
      placeholderTextColor="#666666"
      // secureTextEntry={data.secureTextEntry ? true : false}
      style={[styles.textInput, {
          color: colors.text
      }]}
      autoCapitalize="none"
      // onChangeText={(val) => handlePasswordChange(val)}
  />
  );
};


const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    ...Platform.select({
        ios: {
            marginTop: 0
        },
        android: {
            marginTop: 0
        },
        default: {
          // other platforms, web for example
            marginTop: -12
        }
    })
},
});

export default RNSTextInput;
