import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%'
  },
  subHeaderStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerGestures: {
    paddingTop: 60,
    alignItems: 'center'
  },
  longPressButton: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  gesturesButton: {
    padding: 20,
    color: '#ffffff',
    fontSize: 18
  },
  drag: {
    width: 260,
    height: 60,
    backgroundColor: '#9400D3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  swipe: {
    width: 260,
    height: 60,
    backgroundColor: '#4400D3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  swipeContainer: {
    alignItems: 'center',
    width: 260
  },
  swipeTextLeft: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#2196F3',
    top: 15
  },
  swipeTextRight: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#9400D3',
    top: 15
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 2,
    marginBottom: 10,
    borderRadius: 300,
    width: 140,
    height: 140,
    alignSelf: 'center',
    backgroundColor: '#7B68EE'
  },
  buttonTitleStyle: {
    fontSize: 18
  }
})

export default styles
