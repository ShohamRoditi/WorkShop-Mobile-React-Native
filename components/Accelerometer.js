import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { accelerometer, SensorTypes, setUpdateIntervalForType } from 'react-native-sensors'
import styles from '../styles'

setUpdateIntervalForType(SensorTypes.accelerometer, 10)

export default class Accelerometer extends Component {
  static navigationOptions = () => ({
    title: 'Workshop',
    headerStyle: {
      backgroundColor: '#852BCA'
    },
    headerTitleStyle: {
      fontSize: 25,
      marginTop: 0,
      left: 75,
      color: '#ffffff'
    }
  })

  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
      z: 0
    }
  }

  componentWillUnmount() {
    this.state.sub.unsubscribe()
  }

  componentDidMount() {
    const sub = accelerometer.subscribe(({ x, y, z }) => this.setState({ x, y, z }))
    this.setState({ sub })
  }

  render() {
    return (
      <View style={styles.subHeaderStyle}>
        <Text style={styles.textStyle}>Accelerometer values</Text>
        <Text>x: {this.state.x}</Text>
        <Text>y: {this.state.y}</Text>
        <Text>z: {this.state.z}</Text>
      </View>
    )
  }
}
