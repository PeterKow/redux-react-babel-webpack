import { expect } from 'chai'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils';
import { twitterResultsSimple } from '../../../../../app/containers/articles/mockTwitterResults.js'

import MiniArticle from '../../../../../app/containers/articles/components/miniArticle.jsx'

function setup(){

  const renderer = ReactTestUtils.createRenderer()
  renderer.render(
    <MiniArticle {...twitterResultsSimple[0]}
      key={twitterResultsSimple[0].id}
      onClick={() => { console.log('index', twitterResultsSimple[0].id)}} /> )

   const renderOutput = renderer.getRenderOutput()

  return { renderer, renderOutput}
}

describe('MiniArticle component', function() {

  it('should render correctly', function(){
    const output = setup()
    expect(output.renderOutput.props.children.props.style.padding).to.be.equal('9px 12px');
    expect(output.renderOutput.props.children.props.children.props.children[1]).to.be.equal(twitterResultsSimple[0].text);
  })

})