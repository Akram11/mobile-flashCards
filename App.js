import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./navigation/AppContainer";
import {getDecks} from './utils/api'

class App extends Component{

  componentDidMount(){
    getDecks()
    .then((Data) => {
      this.setState({Data})
    })
  }

  render(){
    return (
      <AppContainer />
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
