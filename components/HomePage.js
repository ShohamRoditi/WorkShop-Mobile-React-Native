import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from '../styles'

class HomePage extends Component {
  static navigationOptions = () => ({
    title: 'Workshop',
    headerStyle: {
      backgroundColor: '#852BCA'
    },
    headerTitleStyle: {
      fontSize: 25,
      marginTop: 0,
      left: 130,
      color: '#ffffff'
    }
  })

  render() {
    const { navigation } = this.props
    return (
      <View>
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitleStyle}
          title={'Geo Location'}
          onPress={() => {
            navigation.navigate('GeoLocation')
          }}
          type={'solid'}
        />
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitleStyle}
          title={'Gestures'}
          onPress={() => {
            navigation.navigate('Gestures')
          }}
          type={'solid'}
        />
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitleStyle}
          title={'Accelerometer'}
          onPress={() => {
            navigation.navigate('Accelerometer')
          }}
          type={'solid'}
        />
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitleStyle}
          title={'Gyroscope'}
          onPress={() => {
            navigation.navigate('Gyroscope')
          }}
          type={'solid'}
        />
      </View>
    )
  }
}

HomePage.propTypes = {
  navigation: PropTypes.object
}

export default HomePage
