import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class DeckView extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("deck")
  });

  render() {
    
    const {deck, id, cardsNumber} = this.props.navigation.state.params;
    console.log(this.props)
    return (
      <View>
        <Text>{deck}{id}{cardsNumber}</Text>
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
