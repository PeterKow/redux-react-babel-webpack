import Immutable from 'immutable'
import { authTwitter } from './user.actions.js'
import { AUTH_TWITTER } from './user.actionTypes.js'

const initialState = Immutable.Map({
  user: { tokens: {} /*'manage_account'*/ },
  fetchingAuth: false
})

function userReducer(state = initialState, action = { type : undefined }) {
  switch (action) {
    case AUTH_TWITTER:
      return state.set('fetchingAuth', true)
    case TWITTER_FAILED:
      return state.set('fetchingAuth', false)
    case TWITTER_LOGIN:
      debugger;
      console.log('action data!!!!!!', action.data)
      return state.merge(state, { user: { tokens: { twitter: action.data.twitter.token } }, fetchingAuth: false})
    default:
      return state
  }
}

export default userReducer
