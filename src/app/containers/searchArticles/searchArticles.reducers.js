import { SEARCH_ARTICLES } from './searchArticles.actionTypes.js'


const initialState = {
  language: 'JavaScript',
  location: 'London',
  keywords: 'React AND Flux'
}

function searchArticlesReducer(state = initialState, action = { type: undefined}){
  switch (action.type){
    case SEARCH_ARTICLES:
      console.log('new State', action.newSearch)
      return state.set(action.newSearch)
    default:
      return state
  }
}

export default searchArticlesReducer