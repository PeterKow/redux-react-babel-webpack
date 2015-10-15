
import { expect } from 'chai';
import { AUTH_TWITTER, TWITTER_LOGIN, TWITTER_FAILED } from '../../../../app/containers/user/user.actionTypes.js';

describe('User Actions Types', () => {

  it('should have all action types', () => {
    expect(AUTH_TWITTER).to.be.exist;
    expect(TWITTER_LOGIN).to.be.exist;
    expect(TWITTER_FAILED).to.be.exist;
  });

  it('action types should be frozen - immutable', () => {
    expect(AUTH_TWITTER).to.not.be.extensible;
    expect(TWITTER_LOGIN).to.not.be.extensible;
    expect(TWITTER_FAILED).to.not.be.extensible;
  });

});