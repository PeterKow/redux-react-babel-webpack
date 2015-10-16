/**
 * Created by Peter on 26/08/15.
 */

export default {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'VeryHardStringgg',
  MONGO_DB: {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/twitterReact',
  },
  TWITTER_AUTH: {
    TWITTER_KEY: process.env.TWITTER_KEY,
    TWITTER_SECRET: process.env.TWITTER_SECRET,
    TWITTER_CALLBACK: process.env.TWITTER_CALLBACK || 'http://127.0.0.1:8000/auth/twitter/callback'
    //TWITTER_KEY: process.env.TWITTER_KEY || 'Twitter Consumer Key',
    //TWITTER_SECRET: process.env.TWITTER_SECRET || 'Twitter Consumer Secret',
    //TWITTER_CALLBACK: process.env.TWITTER_CALLBACK || 'Twitter Callback Url',
  }

};