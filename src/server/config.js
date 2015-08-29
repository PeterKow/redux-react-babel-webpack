/**
 * Created by Peter on 26/08/15.
 */

export default {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'VeryHardStringgg',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/peterTweeter',
  TWITTER_KEY: process.env.TWITTER_KEY || 'cCQtvCWf3fGO32gUFPYM3hywq',
  TWITTER_SECRET: process.env.TWITTER_SECRET || 'N3EuSzOD7v1iuQV7EIGlXWzPngd0OhqylwgrYCnBChuzFf2q7M',
  TWITTER_CALLBACK: process.env.TWITTER_CALLBACK || 'http://127.0.0.1:5000'
  //TWITTER_KEY: process.env.TWITTER_KEY || 'Twitter Consumer Key',
  //TWITTER_SECRET: process.env.TWITTER_SECRET || 'Twitter Consumer Secret',
  //TWITTER_CALLBACK: process.env.TWITTER_CALLBACK || 'Twitter Callback Url',
};