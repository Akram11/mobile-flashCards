import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { getInitialData } from "../utils/api";
import CustomButton from "../components/CustomButton";
import { AsyncStorage } from "react-native";

class DecksList extends Component {
  static navigationOptions = {
    headerTitle: "Flash Cards"
  };

  state = {
    decks: {}
  };

  componentWillMount() {
    getInitialData().then(data => {
      const decks = JSON.parse(data);
      this.setState({ decks });
    });
  }

  render() {
    //TODO: make this a component on a different file!
    if (Object.keys(this.state.decks).length === 0) {
      return (
        <View style={styles.blank}>
          <Text style={{ fontSize: 20 }}> No decks yet!! </Text>
          <Button
            title="Add Deck"
            onPress={() => this.props.navigation.navigate("NewDeck")}
          />
        </View>
      );
    } else {
      return (
        this.state.decks && (
          <View style={styles.container}>
            <FlatList
              data={Object.values(this.state.decks)}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() =>
                    this.props.navigation.navigate("Deck", {
                      deck: item.title,
                      cardsNumber: item.questions.length,
                      id: item.id
                    })
                  }
                >
                  <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
            <CustomButton
              onPress={() => {
                this.props.navigation.navigate("NewDeck");
              }}
            >
              Create a new Deck
            </CustomButton>
          </View>
        )
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start"
  },
  listItem: {
    flex: 1,
    justifyContent: "center",
    minHeight: 120,
    marginBottom: 10,
    padding: 20,
    borderRadius: 5,
    borderWidth: 2
  },
  blank: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    textAlign: "center"
  }
});

export default DecksList;
