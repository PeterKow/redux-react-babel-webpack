import Immutable from 'immutable'
import { SEARCH_ARTICLES } from './searchArticles.actionTypes.js'

const initialState = Immutable.Map({
  language: 'JavaScript',
  location: 'London',
  keywords: 'React AND Flux'
})

function searchArticlesReducer(state = initialState, action = { type: undefined}){
  switch (action.type){
    case SEARCH_ARTICLES:
      console.log('new State', action.newSearch)
      return state.merge(action.newSearch)
    default:
      return state
  }
}

export default searchArticlesReducer