import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fb from './screens/fb';
import insta from './screens/insta';
export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
 
}
const TabNavigator=createBottomTabNavigator({
facebook:{
screen:fb
},
instagram:{
  screen:insta
},
})

const AppContainer=createAppContainer(TabNavigator);