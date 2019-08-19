import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import CustomButton from '../components/CustomButton'
import {addDeck} from '../utils/api'
import {generateId} from '../utils/helpers'



class NewDeck extends Component {

  static navigationOptions = {
    title: "Create a new Deck",
  };

state = {
  text: ""
}

createDeckObject = () => (
  {
    id: generateId(),
    title: this.state.text,
    questions: []
  }
)

handleSubmit = () => {
  deck = this.createDeckObject()
  addDeck(deck)

  this.setState(() => ({
    text: ""
  }));
  this.props.navigation.navigate("Deck", {
    deck: this.state.text,
    cardsNumber: 0,
    questions:[]
  });
}

handleInput = text => {
  this.setState(() => ({
    text
  }));
};

  render() {
    console.log(this.props)

    const text = this.state.text
    return (
   
         <KeyboardAvoidingView style = {styles.container}behavior="padding" enabled>
         <Text style ={styles.text }>What do you wanna call this Deck?</Text>
        <TextInput 
         value={text}
          style = {styles.input}  
          onChangeText={this.handleInput}
          placeholder="e.g Python"
        />
       
         <CustomButton onPress={this.handleSubmit} disabled = {text === "" ? true : false}>
           Create
         </CustomButton>
         <Text>
          state {this.state.text}
         </Text>
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
    backgroundColor: '#F8F8F8',
    borderColor: '#D3E7EB',
    margin: 20,
    padding: 5,
    width:'80%',
    fontSize: 20,
    borderRadius: 1,
    
  }  
});

export default NewDeck;


// BUGS: a refresh is still needed to update the view and see the new added deck