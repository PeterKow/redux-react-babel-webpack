import KeyMirror from 'keymirror'

const actionTypes = KeyMirror({
  AUTH_TWITTER: null,
  TWITTER_LOGIN: null
})

Object.freeze(actionTypes)

export default(actionTypes)