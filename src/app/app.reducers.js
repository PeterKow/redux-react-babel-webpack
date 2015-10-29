import { combineReducers } from 'redux'
import { application } from './utils/application.reducer.js'
import { visibilityFilter, miniarticles} from './containers/articles/reducers.js'
import searchArticles from './containers/searchArticles/searchArticles.reducers.js'
import user from './containers/user/user.reducers.js'

const allReducers = combineReducers({
  application,
  visibilityFilter,
  miniarticles,
  searchArticles,
  user
})

export default allReducers

