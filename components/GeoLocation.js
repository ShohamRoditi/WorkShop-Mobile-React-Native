import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import styles from '../styles'

class Geolocation extends Component {
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
      latitude: null,
      longitude: null,
      latitudeDelta: 1,
      longitudeDelta: 1,
      error: null
    }
  }

  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(
      async position => {
        await this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  OpenMap() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta: this.state.longitudeDelta
        }}
      >
        {!!this.state.latitude && !!this.state.longitude && (
          <MapView.Marker
            coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
            title={'Your Location'}
          />
        )}
      </MapView>
    )
  }

  render() {
    return (
      <View style={styles.subHeaderStyle}>
        <Text style={styles.textStyle}>Your Position:</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.latitude === null ? <Text>Error: {this.state.error}</Text> : null}
        {/* {this.state.latitude === null ? <Text>Error: {this.state.error}</Text> : this.OpenMap()} */}
      </View>
    )
  }
}

export default Geolocation
