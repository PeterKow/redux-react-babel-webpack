import { expect } from 'chai';
import nock from 'nock'

import mockStore from '../../../utils/testActions.js'
import { twitterLogin, twitterFailed, authTwitter } from '../../../../app/containers/user/user.actions.js'

describe('User actions', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('should create authTwitter action and authorize successfully', (done) => {

    const profileReplySuccess = {
      _id: 'user_id',
      twitter: {
        token: 'token_string'
      }
    }

    nock('http://example.com')
      .get('/profile')
      .reply(200, profileReplySuccess);

    const expectedActions = [
      { type: 'AUTH_TWITTER' },
      { type: 'TWITTER_LOGIN', data: profileReplySuccess }
    ]
    const store = mockStore({}, expectedActions, done);
    store.dispatch(authTwitter());

  })

  it('should create authTwitter action and fail if response doesn\'t contain "_id" or "token"', (done) => {

    nock('http://example.com')
      .get('/profile')
      .reply(200, {});

    const expectedActions = [
      { type: 'AUTH_TWITTER' },
      { type: 'TWITTER_FAILED' }
    ]
    const store = mockStore({}, expectedActions, done);
    store.dispatch(authTwitter());
  })

  it('should create authTwitter action and failed if server replies unauthorized 401', (done) => {

    nock('http://example.com')
      .get('/profile')
      .reply(404);

    const expectedActions = [
      { type: 'AUTH_TWITTER' },
      { type: 'TWITTER_FAILED' }
    ]

    const store = mockStore({}, expectedActions, done);
    store.dispatch(authTwitter());
  })

  it('should create twitterLogin action', () => {
    const data = {
      data: 'data'
    }
    const expectedAction = { type: 'TWITTER_LOGIN', data}
    expect(twitterLogin(data)).to.deep.equal(expectedAction);
  })

  it('should create twitterFailed action', () => {
    const expectedAction = { type: 'TWITTER_FAILED'}
    expect(twitterFailed()).to.deep.equal(expectedAction);
  })

})