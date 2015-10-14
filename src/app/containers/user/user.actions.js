import { AUTH_TWITTER, TWITTER_LOGIN, TWITTER_FAILED } from './user.actionTypes.js'

export function authTwitter() {
  return dispatch => {
    dispatch({ type: AUTH_TWITTER })
    
    return fetch('/profile',{
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(data => {
        if (data._id && data.twitter.token){
          dispatch(twitterLogin(data))
          // TODO create more dumb components and move dispatcher to parent -> actionName=dispatch(actionName()) and then child will just call this! :)
          //window.history.pushState(null, null, '/')
        } else {
          dispatch(twitterFailed())
          window.history.pushState(null, null, '/login')
        }
      })
      .catch(res => console.log('ended BADD!!! from fetchMiniArticles', res));
  }
}

export function twitterLogin(data) {
  return { type: TWITTER_LOGIN, data }
}

export function twitterFailed(){
  return { type: TWITTER_FAILED }
}