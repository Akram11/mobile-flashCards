import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NewDeck } from './NewDeck';

class DescksList extends Component {
  render() {
    return (
      <View>
        <Text>Decks List Screen</Text>
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

export default DescksList;
