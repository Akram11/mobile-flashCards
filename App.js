import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./navigation/AppContainer";
import { setLocalNotification } from "./utils/helpers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/index";


class App extends Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <AppContainer style={styles.container} />
      </Provider>
    );
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
