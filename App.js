import React from 'react';
import {View, StyleSheet} from 'react-native';
import Feednavigator from './Apps/Navigations/FeedNavigator';
import { NavigationContainer } from '@react-navigation/native';

import Register from "./Apps/Screens/ListingsScreen"

function App() {
  return (
    <NavigationContainer>
   <Feednavigator/>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {},
});

export default App;