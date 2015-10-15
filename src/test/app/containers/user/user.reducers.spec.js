import { expect } from 'chai'
import sinon from 'sinon'
import proxyquire from 'proxyquire'

const stub = {
  setItem: sinon.spy()
}
const userReducer = proxyquire('../../../../app/containers/user/user.reducers.js', {
  '../../utils/localStorage.js': {
    setItem: stub.setItem
  },
})

afterEach(function(){
  stub.setItem.reset();
})

describe('User reducers', function(){

  it('AUTH_TWITTER should set fetchingAuth to true', function(){
    const action = { type: 'AUTH_TWITTER'}
    const newState = userReducer(undefined, action)

    expect(newState.get('fetchingAuth')).to.equal(true);

  })

  it('TWITTER_FAILED should set fetchingAuth to false', function(){
    const action = { type: 'TWITTER_FAILED'}
    const newState = userReducer(undefined, action)

    expect(newState.get('fetchingAuth')).to.equal(false);

  })

  it('TWITTER_LOGIN should set fetchingAuth to false', function(){

    const action = {
      type: 'TWITTER_LOGIN',
      data: {
        twitter: {
          token: 'twitter_token'
        }
      }
    }

    const newState = userReducer(undefined, action)

    expect(newState.get('tokens').get('twitter')).to.equal('twitter_token');
    expect(newState.get('fetchingAuth')).to.equal(false);
    expect(stub.setItem.called).to.equal(true);

  })


})