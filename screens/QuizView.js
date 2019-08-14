import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

class QuizView extends Component {

    state = {
    showSideB: false,
    index: 0,
    correctAnswers: 0,
    incorrectAnswers: 0, 
    endOfQuiz: false
  };

  flipCard = () => {
    this.setState(state => ({
      ...state,
      showSideB: !state.showSideB
    }));
  };

  nextCard = () => {
    this.setState(state => ({
      ...state,
      index: state.index + 1
    }));
  };

  handleAnswer = (answer, lastQuestion) => {
    this.setState(state => ({
      ...state,
      correctAnswers: answer ? state.correctAnswers + 1 : state.correctAnswers,
      incorrectAnswers: !answer ? state.incorrectAnswers + 1 : state.incorrectAnswers,
      index: lastQuestion ? state.index : state.index + 1
    }));

  } 

  // handleCorrectAnswer = (lastQuestion, answer) => {
  //   if (lastQuestion) {
  //     this.setState(state => ({
  //       ...state,
  //       correctAnswers: state.correctAnswers + 1,
  //     }));
  //   }

  // };

  // handleIncorrectAnswer = () => {
  //   this.setState(state => ({
  //     ...state,
  //     incorrectAnswers: state.incorrectAnswers + 1
  //   }));
  // };

  static navigationOptions = ({ navigation }) => ({
    title: `Quiz in ${navigation.getParam("deck")}`
  });
 

  render() {
    console.log(this.state)
    const {
      deck,
      id,
      cardsNumber,
      questions
    } = this.props.navigation.state.params;
    let lastQuestion = this.state.index === questions.length - 1 ? true : false;
    let done = this.state.index === questions.length ? true : false;
    return (
      done ? <View style={styles.container}><Text style={styles.text}>
      this is done!
    </Text></ View>  :
      <View style={styles.container}>
        <View style={styles.quiz}>
          {!this.state.showSideB ? (
            <Text style={styles.text}>
              {questions[this.state.index].question}
            </Text>
          ) : (
            <Text style={styles.text}>
              {questions[this.state.index].answer}
            </Text>
          )}
          <CustomButton onPress={this.flipCard}>
            {`Show side ${this.state.showSideB ? "A" : "B"}`}
          </CustomButton>
          <CustomButton
            onPress={this.nextCard}
            disabled={lastQuestion ? true : false}
          >
            {lastQuestion
              ? `End of Deck ${questions.length}/${questions.length}`
              : `next card   ${this.state.index + 1}/${questions.length} `}
          </CustomButton>
        </View>
        
        <View style={styles.buttons}>
          <CustomButton onPress={() => this.handleAnswer(true, lastQuestion)}>
            right
          </CustomButton>
          <CustomButton  onPress={() => this.handleAnswer(false)}>
            wrong
          </CustomButton>
          <Text> {this.state.correctAnswers} </Text>
          <Text> {this.state.incorrectAnswers} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  quiz: {
    alignSelf: "stretch",
    backgroundColor: "#555",
    borderRadius: 5,
    margin: 5
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});

export default QuizView;
