import { SEARCH_ARTICLES } from './searchArticles.actionTypes.js'

export function searchArticles(newSearch) {
  return dispatch => {
    fetch('/auth/twitter')

      .then(res => dispatch(newMiniArticles(randomResponse())))
      .catch(res => console.log('ended BADD!!! from fetchMiniArticles', res));

  }
  return { type: SEARCH_ARTICLES, newSearch};
}