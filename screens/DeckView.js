import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DeckView extends Component {
  render() {
    const name = this.props.navigation.state.params.deck;

    return (
      <View>
        <Text>{name}</Text>
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
