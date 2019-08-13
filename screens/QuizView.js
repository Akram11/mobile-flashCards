import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton'

class QuizView extends Component {

  state = {
    showSideB: false
  }

  flipCard = () => {
    this.setState(state => ({
      showSideB: !state.showSideB
    }));
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Quiz in ${navigation.getParam("deck")}`
  });


  render() {
    const { deck, id, cardsNumber, questions } = this.props.navigation.state.params;
    console.log(questions)
    return (

      <View style={styles.container}>
        <View>
          {!this.state.showSideB ? (
            <Text style={styles.text}>{questions[0].question}</Text>
          ) : (
            <Text style={styles.text}>{questions[0].answer}</Text>
          )}
          <CustomButton
            onPress={this.flipCard}
        > {`Show side ${this.state.showSideB ? 'A' : 'B'}`}</CustomButton>
        </View>

      </View>
      // <View>
      //   <Text>{questions[0].answer}</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    backgroundColor : '#555',
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  }
});

export default QuizView;
