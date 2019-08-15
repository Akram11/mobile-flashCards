import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
 import CustomButton from '../components/CustomButton'
 import {addCard} from '../utils/api'



class NewCard extends Component {

  static navigationOptions = {
    title: "Create a new Card",
  };


  state = {
    sideA: "",
    sideB: ""
  };

  createCardObject = () => (
    {
      sideA: this.state.sideA,
      sideB :this.state.sideB
    }
  )


  handleSubmit = () =>{
    card = this.createCardObject()
    addCard (this.props.navigation.state.params.deck, card)
  }



  render() {
    const {sideA,sideB} = this.state
    const deck = this.props.navigation.state.params.deck
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <Text > {`add a new card to ${deck}`}</Text>
          <Text style={styles.text}>Side A </Text>
          <TextInput
            style={styles.input}
            value={sideA}
            placeholder="what is the question"
            onChangeText={sideA => this.setState({ sideA })}
          />
          <Text style={styles.text}>Side B</Text>
          <TextInput
            style={styles.input}
            value={sideB}
            placeholder="what is the answer"
            onChangeText={sideB => this.setState({ sideB })}
          />
        <CustomButton onPress={this.handleSubmit}>
          <Text>Create Card</Text>
        </CustomButton>
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
    color: '#1E90FF',
    margin: 10
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderColor: '#D3E7EB',
    width:'80%',
    fontSize: 20,
    height: 50,
    padding: 10,
    borderRadius: 1,
  }
});

export default NewCard;
