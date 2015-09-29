import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ButtonInput } from 'react-bootstrap';
import SearchLocation from './components/searchLocation.js'
import SearchKeyWords from './components/searchKeywords.js'
import SelectLanguage from './components/selectLanguage.js'
import Router, { History } from 'react-router'
import { searchArticles } from './searchArticles.actions.js'

var initialState = { searchKeywords: '', searchLocation: '', selectLanguage: ''};

const searchArticlesApp = React.createClass({
  onSubmit: onSubmit,
  preventDefaultSubmit: preventDefaultSubmit,
  render: render,
  propTypes: {
    sendValues: React.PropTypes.func.isRequired
  }
});

function onSubmit (e) {
  const {  sendValues, searchArticles } = this.props
  const { language, location, keywords } = this.refs
  const payload = {
      newData: {
        location: location.state.value,
        keywords: keywords.state.value,
        language: language.state.value
      },
      oldData: {
        location: searchArticles.get('location'),
        keywords: searchArticles.get('keywords'),
        language: searchArticles.get('language')
      }
    }
  sendValues(payload);
  this.preventDefaultSubmit(e);
}

function preventDefaultSubmit (e) {
  e.preventDefault()
}

function render() {

  //TODO: change it to form-serialize or try redux-form
  const { searchArticles } = this.props
  return (
    <form>
      <SelectLanguage ref='language' defaultLanguage={searchArticles.get('language')} label="Select your programming language"/>
      <SearchLocation ref='location' location={searchArticles.get('location')} />
      <SearchKeyWords ref='keywords' keywords={searchArticles.get('keywords')} />
      <ButtonInput style={{ width: '100%' }} type="submit" value="Search articles" onClick={ this.onSubmit } />
    </form>
  )
}

function select(state){
  return {
    searchArticles: state.searchArticles
  }
}

export default connect(select)(searchArticlesApp);