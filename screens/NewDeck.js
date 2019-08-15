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

state = {
  text: ""
}

createDeckObject = (title) => (
  {
    id: generateId(),
    title: title,
    questions: []
  }
)

handleInput = text => {
  this.setState(() => ({
    text
  }));
};

  render() {

    console.log(this.state)
    const test = this.createDeckObject(this.state.text)
    console.log(test)
    const text = this.state.text
    return (
   
         <KeyboardAvoidingView style = {styles.container}behavior="padding" enabled>
         <Text style ={styles.text }>What do you wanna call this Deck?</Text>
        <TextInput style = {styles.input}  
          onChangeText={this.handleInput}
          placeholder="e.g Python"
        />
       
         <CustomButton onPress={this.createDeckObject} disabled = {text === "" ? true : false}>
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
