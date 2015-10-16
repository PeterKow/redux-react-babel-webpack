import Immutable from 'immutable'
import { authTwitter } from './user.actions.js'
import { AUTH_TWITTER, TWITTER_FAILED, TWITTER_LOGIN, TWITTER_LOGOUT } from './user.actionTypes.js'
import storage from '../../utils/localStorage.js'

const initialState = Immutable.Map({
  tokens: {
    twitter: {}
  } /*'manage_account'*/ ,
  fetchingAuth: false
})

function userReducer(state = initialState, action = { type : undefined }) {

  switch (action.type) {
    case AUTH_TWITTER:
      return state.set('fetchingAuth', true)
    case TWITTER_FAILED:
      return state.set('fetchingAuth', false)
    case TWITTER_LOGIN:
      storage.setItem('token', action.data.twitter.token)
      return state.merge(state, { tokens: { twitter: action.data.twitter.token }, fetchingAuth: false})
    case TWITTER_LOGOUT:
      return state.merge(state, { tokens: { twitter: {} }})
    default:
      return state
  }
}

export default userReducer
