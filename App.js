import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './navigation/AppContainer';
import { setLocalNotification } from './utils/helpers';
import { getInitialData } from './utils/api';
import { createStore } from "redux";
import { Provider } from "react-redux";

class App extends Component {
  componentDidMount() {
    setLocalNotification();
    getInitialData().then(data => {
      const decks = JSON.parse(data);
      this.setState({ decks });
    });
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
