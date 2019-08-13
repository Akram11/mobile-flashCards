import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("deck")
  });

  render() {
    const { deck, id, cardsNumber, questions } = this.props.navigation.state.params;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{deck}</Text>
          <Text style={styles.cardsNo}>number of cards: {cardsNumber}</Text>
        </View>
        <View>
          {cardsNumber !== 0 && (
            <CustomButton
              onPress={() => {
                this.props.navigation.navigate("Quiz", {deck, id, cardsNumber, questions});
              }}
            >
              <Text>Start Quiz</Text>
            </CustomButton>
          )}

          <CustomButton
            onPress={() => {
              this.props.navigation.navigate("NewCard");
            }}
          >
            <Text>Add a Card</Text>
          </CustomButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop: 100,
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    color: "#1E90FF"
  },
  cardsNo: { fontSize: 20, color: "#B8B8B8", textAlign: "center" }
});

export default DeckView;
