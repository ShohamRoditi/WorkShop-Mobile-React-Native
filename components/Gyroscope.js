import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { gyroscope, SensorTypes, setUpdateIntervalForType } from 'react-native-sensors'
import styles from '../styles'

setUpdateIntervalForType(SensorTypes.gyroscope, 10)

export default class Gyroscope extends Component {
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
    const sub = gyroscope.subscribe(({ x, y, z }) => this.setState({ x, y, z }))
    this.setState({ sub })
  }

  render() {
    return (
      <View style={styles.subHeaderStyle}>
        <Text style={styles.textStyle}>Gyroscope values</Text>
        <Text>x: {this.state.x}</Text>
        <Text>y: {this.state.y}</Text>
        <Text>z: {this.state.z}</Text>
      </View>
    )
  }
}

// import React, { Component } from 'react'
// import { StyleSheet, View, Image } from 'react-native'
// import { gyroscope } from 'react-native-sensors'
// const Dimensions = require('Dimensions')
// const PixelRatio = require('PixelRatio')
// const window = Dimensions.get('window')

// const deviceWidth = window.width
// const deviceHeight = window.height

// const imageWidth = 8 * deviceWidth
// const imageHeight = deviceHeight

// export default class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       image: `https://placeimg.com/${PixelRatio.getPixelSizeForLayoutSize(
//         imageWidth
//       )}/${PixelRatio.getPixelSizeForLayoutSize(imageHeight)}/any`,
//       y: 0
//     }
//   }

//   componentDidMount() {
//     const subscription = gyroscope.subscribe(({ y }) => {
//       this.setState(state => ({
//         y: y + state.y
//       }))
//     })

//     this.setState({ subscription })
//   }

//   componentWillUnmount() {
//     this.state.subscription.unsubscribe()
//   }

//   render() {
//     const positionOnScreenX = -imageWidth / 2
//     // The y axis of the sensor data resembles what we need for the x axis
//     // in the image
//     const movementX = (-this.state.y / 1000) * imageWidth

//     return (
//       <View style={styles.container}>
//         <Image
//           translateX={positionOnScreenX + movementX}
//           style={styles.image}
//           source={{ uri: this.state.image }}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   image: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     height: imageHeight,
//     width: imageWidth
//   }
// })
