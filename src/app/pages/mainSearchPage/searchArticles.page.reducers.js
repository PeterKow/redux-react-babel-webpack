import { searchArticles } from '../../containers/searchArticles/searchArticles.actions.js'
import { addMiniArticle, fetchMiniArticles, newMiniArticles, fetchMiniArticlesFailed } from '../../containers/articles/actions.js'


import { randomResponse } from '../../containers/articles/mockTwitterResults.js'

export function triggerNewSearchArticles (formData) {
  return dispatch => {
    dispatch(searchArticles(formData));
    dispatch(fetchMiniArticles(formData))
      .then(res => dispatch(newMiniArticles(randomResponse())))
      .catch(res => {
        dispatch(fetchMiniArticlesFailed())
        console.log('ended BADD!!! from fetchMiniArticles', res)
      });
    // TODO add error handling!
  }
}