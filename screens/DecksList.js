import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { getInitialData } from '../utils/api';
import { AsyncStorage } from 'react-native';

class DecksList extends Component {
  state = {
    decks: {}
  };

  componentDidMount() {
    console.log('inside didmount', this.state);
    getInitialData().then(data => {
      const decks = JSON.parse(data);
      console.log('decks', decks);
      this.setState({ decks }, () => {
        console.log('state', this.state);
      });
    });
  }

  render() {
    return (
      <View>
        <Text>
          {Object.values(this.state.decks).map(deck => {
            return <Text>{deck.title}</Text>;
          })}
        </Text>

        <Button
          title='Go to Deck'
          onPress={() => this.props.navigation.navigate('Deck')}
        />
        <Button
          title='Add Deck'
          onPress={() => this.props.navigation.navigate('NewDeck')}
        />
      </View>
    );
  }
}

export default DecksList;
