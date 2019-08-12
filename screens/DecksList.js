import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getInitialData } from '../utils/api';
import { AsyncStorage } from 'react-native';

class DecksList extends Component {

  static navigationOptions = {
    headerTitle: 'Flash Cards',
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
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(this.state.decks)}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.Button}  onPress={() =>
              this.props.navigation.navigate('Deck', { deck: item.title, cardsNumber: item.questions.length, id: item.id })
            }>
              <Text style = {styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <Button
          title='Add Deck'
          onPress={() => this.props.navigation.navigate('NewDeck')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start'
  },
  Button: {
    flex: 1,
    justifyContent: "center",
    minHeight: 120,
    marginBottom: 10,
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
  }, title: {
    fontSize: 25,
    textAlign: "center"
  }
});

export default DecksList;
