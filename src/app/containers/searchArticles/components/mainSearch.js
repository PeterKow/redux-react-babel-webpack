import React, { Component, PropTypes } from 'react'
import { ButtonInput } from 'react-bootstrap';
import SearchLocation from './searchLocation.js'
import SearchKeyWords from './searchKeywords.js'
import SelectLanguage from './selectLanguage.js'

export default class MainSearch extends Component {

  handleSubmit (e){
    console.log('meee', e)
  }

  render (){
  return (
      <form >
        <SelectLanguage/>
        <SearchLocation/>
        <SearchKeyWords/>
        <ButtonInput style={{ width: '100%' }} type="submit" value="Search articles" onClick={ this.handleSubmit } />
      </form>
  )
  }
}

MainSearch.propTypes = {
  onChange: PropTypes.func.isRequired
};