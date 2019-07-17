import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DeckView extends Component {
  render() {
    return (
      <View>
        <Text>Deck Screen</Text>
        <Button
          title='Take Quiz'
          onPress={() => this.props.navigation.navigate('Quiz')}
        />
        <Button
          title='Add A Card'
          onPress={() => this.props.navigation.navigate('NewCard')}
        />
      </View>
    );
  }
}

export default DeckView;
