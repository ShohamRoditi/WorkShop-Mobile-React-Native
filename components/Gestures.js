import React, { Component } from 'react'
import { Alert, View, Text, TouchableHighlight, Animated, PanResponder } from 'react-native'
import Swipeable from 'react-native-swipeable'
import styles from '../styles'

class Gestures extends Component {
  // swipeable = null
  // handleUserBeganScrollingParentView() {
  //   this.swipeable.recenter()
  // }

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

  componentWillMount() {
    this.dragValue = new Animated.ValueXY()
    this._value = { x: 0, y: 0 }
    this.dragValue.addListener(value => (this._value = value))
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.dragValue.setOffset({
          x: this._value.x,
          y: this._value.y
        })
        // this.dragValue.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([null, { dx: this.dragValue.x, dy: this.dragValue.y }]),
      onPanResponderRelease: (evt, gestureState) => {
        this.dragValue.flattenOffset()
        Animated.decay(this.dragValue, {
          deceleration: 0.99,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start()
      }
    })
  }

  // constructor(props) {
  //   super(props)
  //   // this.state = {}
  // }

  handleLongPress() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    const dragStyle = {
      transform: this.dragValue.getTranslateTransform()
    }
    const leftCont = <Text style={styles.swipeTextLeft}>Swiped Left</Text>
    const rightCont = <Text style={styles.swipeTextRight}>Swiped Right</Text>
    return (
      <View style={styles.container}>
        <View style={styles.swipeContainer}>
          <Swipeable rightContent={leftCont} leftContent={rightCont}>
            <View style={styles.swipe}>
              <Text style={styles.gesturesButton}>Swipe Me!</Text>
            </View>
          </Swipeable>
        </View>
        <Animated.View style={[styles.drag, dragStyle]} {...this.panResponder.panHandlers}>
          <Text style={styles.gesturesButton}>I`m a DragQueen</Text>
        </Animated.View>
        <TouchableHighlight onLongPress={this.handleLongPress}>
          <View style={styles.longPressButton}>
            <Text style={styles.gesturesButton}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Gestures
