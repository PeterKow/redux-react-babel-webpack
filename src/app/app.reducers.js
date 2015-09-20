import { combineReducers } from 'redux'
import { application, visibilityFilter, miniarticles} from './containers/articles/reducers.js'
import searchArticles from './containers/searchArticles/searchArticles.reducers.js'

const allReducers = combineReducers({
  application,
  visibilityFilter,
  miniarticles,
  searchArticles
})

export default allReducers

