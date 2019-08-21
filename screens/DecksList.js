import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { getInitialData } from "../utils/api";
import CustomButton from "../components/CustomButton";
import { connect } from "react-redux";
import { receiveDecks } from "../actions/decks";

class DecksList extends Component {
  
  static navigationOptions = {
    title: "Flash Cards",
    headerStyle: { backgroundColor: "#E8E8E8" },
    headerTitleStyle: { color: "#1E90FF", flex: 1, textAlign: "center" }
  };

  state = {
    loading: true
  };

  componentDidMount() {
    getInitialData()
      .then(decks => this.props.receiveDecks(decks))
      .then(() => {
        this.setState({ loading: false });
      });
  }

  addDeck = deck => {
    this.setState(state => ({
      ...state,
      deck
    }));
  };

  render() {
    const { decks } = this.props;
    if (this.state.loading) {
      return (
        <View style={styles.blank}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return Object.values(decks).length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={Object.values(decks)}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() =>
                  this.props.navigation.navigate("Deck", {
                    deck: item.title
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
            <Text> Create a new Deck</Text>
          </CustomButton>
        </View>
      ) : (
        <View style={styles.blank}>
          <Text style={{ fontSize: 25, color: "#B8B8B8" }}>No decks yet!!</Text>
          <CustomButton
            onPress={() => {
              this.props.navigation.navigate("NewDeck");
            }}
          >
            Create a new Deck
          </CustomButton>
        </View>
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
    backgroundColor: "#F8F8F8",
    borderColor: "#D3E7EB"
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

const mapStateToProps = decks => ({
  decks
});
const mapDispatchToProps = dispatch => ({
  receiveDecks: decks => dispatch(receiveDecks(decks))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecksList);
