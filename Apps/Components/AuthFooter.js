import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../Config/Colors';
import AppButton from './AppButton';

function AuthFooter({style, text, btnText, onPress}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={{color: Colors.grey}}>{text}</Text>
      <AppButton
        style={{backgroundColor: 'transparent',width:60}}
        textStyle={{ fontSize: 14,color:Colors.primary}}
        color= {Colors.primary}
        title={btnText}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});

export default AuthFooter;
