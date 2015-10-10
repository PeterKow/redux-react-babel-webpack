import { AUTH_TWITTER, TWITTER_LOGIN, TWITTER_FAILED } from './user.actionTypes.js'

export function authTwitter() {
  return dispatch => {
    dispatch({ type: AUTH_TWITTER })



    //return {}
    return fetch('/profile',{
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(data => {
        console.log('dispatch', dispatch )
        console.log('data', data )
        if (data._id && data.twitter.token){
          dispatch(twitterLogin(data))
          window.history.pushState(null, null, '/')
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