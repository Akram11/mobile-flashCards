import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './navigation/AppContainer';

class App extends Component {
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
