import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class QuizView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Quiz in ${navigation.getParam('deck')}`
  });

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

  handleAnswer = answer => {
    this.setState(state => ({
      ...state,
      correctAnswers: answer ? state.correctAnswers + 1 : state.correctAnswers,
      incorrectAnswers: !answer
        ? state.incorrectAnswers + 1
        : state.incorrectAnswers,
      index: state.index + 1
    }));
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
          {` You scored  ${this.state.correctAnswers} of ${questions.length} `}
        </Text>
        {clearLocalNotification()}
        {setLocalNotification()}
        {/* <CustomButton
          onPress={this.props.navigation.navigate('Quiz', {
            deck,
            id,
            cardsNumber,
            questions
          })}
        >
          Restar Quiz
        </CustomButton> */}
        {/* <CustomButton onPress={this.props.navigation.navigate('Home')}>
          Home
        </CustomButton> */}
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
              {`Show side ${this.state.showSideB ? 'A' : 'B'}`}
            </CustomButton>
            <CustomButton onPress={this.nextCard}>
              {lastQuestion
                ? `End of Deck ${questions.length}/${questions.length}`
                : `next card   ${this.state.index + 1}/${questions.length} `}
            </CustomButton>
          </View>
        </View>

        <View style={styles.buttons}>
          <CustomButton onPress={() => this.handleAnswer(true)}>
            right
          </CustomButton>
          <CustomButton onPress={() => this.handleAnswer(false)}>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  quizButtons: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    alignSelf: 'center',
    width: '100%'
  },
  score: {
    color: '#1E90FF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
  },
  quiz: {
    alignSelf: 'stretch',
    backgroundColor: '#D3E7EB',
    borderRadius: 5,
    margin: 20,
    padding: 10,
    height: 400
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});

export default QuizView;
