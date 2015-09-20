import { SEARCH_ARTICLES } from './searchArticles.actionTypes.js'

export function searchArticles(newSearch){
  return { type: SEARCH_ARTICLES, newSearch}
}