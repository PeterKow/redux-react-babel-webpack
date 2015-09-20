import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ButtonInput } from 'react-bootstrap';
import SearchLocation from './components/searchLocation.js'
import SearchKeyWords from './components/searchKeywords.js'
import SelectLanguage from './components/selectLanguage.js'
import Router, { History } from 'react-router'

var initialState = { searchKeywords: '', searchLocation: '', selectLanguage: ''};

const searchArticlesApp = React.createClass({
  mixins: [History],
  onSubmit: onSubmit,
  preventDefaultSubmit: preventDefaultSubmit,
  render: render
});

function onSubmit (e) {
  console.log('weqwe', this.refs.language.state.value)
  console.log('weqwe', this.refs.location.state.value)
  console.log('weqwe', this.refs.keywords.state.value)
  this.preventDefaultSubmit(e);
  this.history.pushState(null, `/`);
}

function preventDefaultSubmit (e) {
  e.preventDefault()
}

function render() {

  const { searchArticles } = this.props
  return (
    <form>
      <SelectLanguage ref='language' language={searchArticles.language} />
      <SearchLocation ref='location' location={searchArticles.location} />
      <SearchKeyWords ref='keywords' keywords={searchArticles.keywords} />
      <ButtonInput style={{ width: '100%' }} type="submit" value="Search articles" onClick={ this.onSubmit }  />
    </form>
  )
}

function select(state){
  return {
    searchArticles: state.searchArticles
  }
}

export default connect(select)(searchArticlesApp);