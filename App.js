// import React, { Component } from 'react'
// import { View } from 'react-native'
// import styles from './styles'
import HomePage from './components/HomePage'
import GeoLocation from './components/GeoLocation'
import Gestures from './components/Gestures'
import Accelerometer from './components/Accelerometer'
import Gyroscope from './components/Gyroscope'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const MainNavigator = createStackNavigator(
  {
    HomePage: { screen: HomePage },
    GeoLocation: { screen: GeoLocation },
    Gyroscope: { screen: Gyroscope },
    Gestures: { screen: Gestures },
    Accelerometer: { screen: Accelerometer }
  },
  {
    initialRouteName: 'HomePage'
  }
)

const App = createAppContainer(MainNavigator)

export default App
