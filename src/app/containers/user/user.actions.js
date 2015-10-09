import { AUTH_TWITTER, TWITTER_LOGIN } from './user.actionTypes.js'

export function authTwitter() {
  return dispatch => {
    dispatch({ type: AUTH_TWITTER })



    //const request = new XMLHttpRequest;
    //request.open('GET', '/auth/twitter', true);
    //request.send();

    //$.ajax({
    //  type:"GET",
    //  dataType:"jsonp",
    //  url:"http://ajax.googleapis.com/ajax/services/feed/load",
    //  data:{"v":"1.0", "num":"10", "q":"http://feeds.feedburner.com/mathrubhumi"},
    //
    //  success: function(result){
    //    //.....
    //  }
    //});

    return {}
    return fetch('/auth/twitter')
      .then(res => dispatch(twitterLogin(res)))
      .catch(res => console.log('ended BADD!!! from fetchMiniArticles', res));
  }
}

export function twitterLogin(data) {
  return { type: TWITTER_LOGIN, data }
}