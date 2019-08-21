import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

class QuizView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Quiz in ${navigation.getParam("title")}`
  });

  initialState = {
    showSideB: false,
    index: 0,
    correctAnswers: 0,
    endOfQuiz: false
  };

  state = this.initialState;

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

  handleAnswer = answer => {
    this.setState(state => ({
      ...state,
      showSideB: false,
      correctAnswers: answer ? state.correctAnswers + 1 : state.correctAnswers,
      index: state.index + 1
    }));
  };

  restartQuiz = () => {
    this.setState(this.initialState);
  };

  render() {
    const {
      deck,
      id,
      cardsNumber,
      questions
    } = this.props.navigation.state.params;
    let lastQuestion = this.state.index === questions.length - 1 ? true : false;
    let done = this.state.index === questions.length ? true : false;
    return done ? (
      <View style={styles.container}>
        <Text style={styles.score}>
          {` You scored  ${this.state.correctAnswers} right answers of ${questions.length} `}
        </Text>
        {clearLocalNotification()}
        {setLocalNotification()}
        <CustomButton onPress={this.restartQuiz}>
          <Text>Restart Quiz</Text>
        </CustomButton>
        <CustomButton onPress={() => this.props.navigation.goBack()}>
          <Text>Back to Deck</Text>
        </CustomButton>
      </View>
    ) : (
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
          <View style={styles.quizButtons}>
            <CustomButton onPress={this.flipCard}>
              {`Show side ${this.state.showSideB ? "A" : "B"}`}
            </CustomButton>
            <CustomButton onPress={this.nextCard}>Skip</CustomButton>
          </View>
        </View>
        <Text style={styles.cardsNo}>
          {lastQuestion
            ? `End of Deck ${questions.length}/${questions.length}`
            : `Card: ${this.state.index + 1} of ${questions.length}`}
        </Text>

        <View style={styles.buttons}>
          <CustomButton
            style={styles.right}
            onPress={() => this.handleAnswer(true)}
          >
            <Text>Right</Text>
          </CustomButton>
          <CustomButton
            style={styles.wrong}
            onPress={() => this.handleAnswer(false)}
          >
            <Text>Wrong</Text>
          </CustomButton>
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
  quizButtons: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    alignSelf: "center",
    width: "100%"
  },
  score: {
    color: "#1E90FF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50
  },
  quiz: {
    alignSelf: "stretch",
    backgroundColor: "#D3E7EB",
    borderRadius: 5,
    margin: 20,
    padding: 10,
    height: 400
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
  },
  right: {
    backgroundColor: "#00cc88",
    flex: 1,
    height: 50
  },
  wrong: {
    backgroundColor: "#cc0000",
    flex: 1
  },
  cardsNo: { fontSize: 20, color: "#B8B8B8", textAlign: "center" }
});

export default QuizView;
