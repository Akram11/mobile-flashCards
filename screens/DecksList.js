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
    title: "Flash Cards",
    headerStyle: { backgroundColor: '#E8E8E8' },
    headerTitleStyle: { color: '#1E90FF', flex: 1, textAlign: 'center'},
  };

  state = {
    decks: {}
  };

  
  componentDidMount() {
    getInitialData().then(data => {
      const decks = JSON.parse(data);
      this.setState({ decks });
    });
  }

  render() {
    //TODO: make this a component on a different file!
    console.log(this.state.decks)
    if (Object.keys(this.state.decks).length === 0) {
      return (
        <View style={styles.blank}>
          <Text style={{ fontSize: 25, color: '#B8B8B8' }}> No decks yet!! </Text>
          <CustomButton
              onPress={() => {
                this.props.navigation.navigate("NewDeck");
              }}
            >
              Create a new Deck
            </CustomButton>
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
                      id: item.id,
                      questions: item.questions
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
    borderRadius: 15,
    borderWidth: 3,
    backgroundColor: '#F8F8F8',
    borderColor: '#D3E7EB'
  },
  blank: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    textAlign: "center"
  }
});

export default DecksList;
