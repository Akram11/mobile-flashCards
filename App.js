import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DescksList from './screens/DecksList';
import NewDeck from './screens/NewDeck';
import DeckView from './screens/DeckView';
import QuizView from './screens/QuizView';
import NewCard from './screens/NewCard';
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions
} from 'react-navigation';

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!hola</Text>
      {/* <DescksList /> */}
      <DeckView />
      <QuizView />
      <NewCard />
      <NewDeck />
      {/* <AppNavigator /> */}
    </View>
  );
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: DescksList
    },
    Deck: {
      screen: DeckView
    },
    Quiz: {
      screen: QuizView
    },
    NewCard: {
      screen: NewCard
    },
    NewDeck: {
      screen: NewDeck
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default createAppContainer(AppNavigator);
