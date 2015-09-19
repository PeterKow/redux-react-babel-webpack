import React, { Component, PropTypes } from 'react'
import { ButtonInput } from 'react-bootstrap';
import SearchLocation from './searchLocation.js'
import SearchKeyWords from './searchKeywords.js'
import SelectLanguage from './selectLanguage.js'
import Router, { History } from 'react-router'

var initialState = { searchKeywords: '', searchLocation: '', selectLanguage: ''};

const MainSearch =  React.createClass({
  mixins: [History],
  onSubmit: onSubmit,
  render: render
});

function onSubmit () {
  console.log('weqwe', this.refs.language.state.value)
  console.log('weqwe', this.refs.location.state.value)
  console.log('weqwe', this.refs.keywords.state.value)
  this.history.pushState(null, `/`, null);
}

function render() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <SelectLanguage ref='language'/>
      <SearchLocation ref='location'/>
      <SearchKeyWords ref='keywords'/>
      <ButtonInput style={{ width: '100%' }} type="submit" value="Search articles" onClick={ this.onSubmit }  />
    </form>
  )
}

export default MainSearch;

