import {RECEIVE_DECKS,
    CREATE_DECK,
    CREATE_CARD } from '../actions/decks'
// import initialData from '../utils/initialData'


  
export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DECKS:{
            return {
                ...state,
                ...action.decks
              };            
        }
        case CREATE_DECK: 
            return {
                ...state,
                [action.deck.title]: {
                    id: action.deck.id,
                    title: action.deck.title,
                    questions: action.deck.questions
                }
            }
    }
}