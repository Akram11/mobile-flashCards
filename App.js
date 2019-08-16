import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './navigation/AppContainer';
import { setLocalNotification } from "./utils/helpers"

class App extends Component {

componentDidMount(){
  setLocalNotification()
}

  render() {
    return <AppContainer style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
