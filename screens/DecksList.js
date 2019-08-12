import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { getInitialData } from '../utils/api';
import { AsyncStorage } from 'react-native';

class DecksList extends Component {
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
    // console.log(
    //   'asdfasdf',
    //   this.state.decks,
    //   'fghjfghj',
    //   Object.keys(this.state.decks),
    //   '[[[[[[[[[[[',
    //   Object.values(this.state.decks)
    // );
    console.log(Object.this.state.)
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.keys(this.state.decks)}
          renderItem={deck => (
            <Button
              title={deck.item}
              onPress={() =>
                this.props.navigation.navigate('Deck', { deck: deck.item })
              }
            />
          )}
        />

        <Text>
          {Object.values(this.state.decks).map(deck => {
            return <Text key={deck.title}>{deck.title}</Text>;
          })}
        </Text>

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
  }
});

export default DecksList;
