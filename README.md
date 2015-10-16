# redux-react-babel-webpack
Example implementation of Redux + Immutable + DevTools + React-Router with React 0.14 packed with webpack ES6. Example oAtuh login for Twitter with passport. Example tests with Mocha, Chai.  App is more a playground to tryout new things and still under development.

On the backend Node with Express, MongoDB and Passport oAuth.

Note: running mongodb required

Git checkout to **refactor_act2** branch!
```git checkout refactor_act2```

Install:
```npm install```

Register your Twitter on https://apps.twitter.com/ with application settings:
*Callback URL	http://127.0.0.1:8000/auth/twitter/callback* and export TWITTER_KEY and TWITTER_SECRET in your terminal:
```export TWITTER_KEY=Twitter Consumer Key```
```export TWITTER_SECRET=Twitter Consumer Secret```

Start:
```npm run start```

Goto:```http://127.0.0.1:8000```

How to install Mongodb:

1. ```brew install mongodb --devel```
2. ```brew services start mongodb```