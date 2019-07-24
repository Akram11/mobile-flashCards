import { createStackNavigator, createAppContainer } from 'react-navigation'

import DeckList from '../screens/DecksList'
import DeckView from '../screens/DeckView'
import NewCard from '../screens/NewCard'
import NewDeck from '../screens/NewDeck'
import QuizView from '../screens/QuizView'

const AppNavigation = createStackNavigator({
    Home: {
        screen: DeckList,
    },
    NewDeck: {
        screen: NewDeck,
    },
    NewCard: {
        screen: NewCard,
    },
    Deck: {
        screen: DeckView,
    },
    Quiz: {
        screen: QuizView,
    },
})

export default createAppContainer(AppNavigation)

