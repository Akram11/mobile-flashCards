import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { createDeck } from "../actions/decks";
import CustomButton from "../components/CustomButton";
import { addDeck } from "../utils/api";
import { generateId } from "../utils/helpers";

class NewDeck extends Component {
  static navigationOptions = {
    title: "Create a new Deck"
  };

  state = {
    text: ""
  };

  createDeckObject = () => ({
    id: generateId(),
    title: this.state.text,
    questions: []
  });

  handleSubmit = () => {
    deck = this.createDeckObject();
    addDeck(deck); //add Deck to AsyncStorage
    this.props.createDeck(deck); //add Deck to Redux

    this.setState(() => ({
      text: ""
    }));

    this.props.navigation.navigate("Deck", {
      deck: this.state.text,
    });
  };

  handleInput = text => {
    this.setState(() => ({
      text
    }));
  };

  render() {
    const text = this.state.text;

    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={styles.container}>
          <Text style={styles.text}>What do you wanna call this Deck?</Text>
          <TextInput
            value={text}
            style={styles.input}
            onChangeText={this.handleInput}
            placeholder="e.g Python"
          />

          <CustomButton
            onPress={this.handleSubmit}
            disabled={text === "" ? true : false}
          >
            Create
          </CustomButton>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1E90FF"
  },
  input: {
    backgroundColor: "#F8F8F8",
    borderColor: "#D3E7EB",
    margin: 20,
    padding: 5,
    width: "80%",
    fontSize: 20,
    borderRadius: 1
  }
});

const mapDispatchToProps = dispatch => ({
  createDeck: deck => dispatch(createDeck(deck))
});

export default connect(
  null,
  mapDispatchToProps
)(NewDeck);
