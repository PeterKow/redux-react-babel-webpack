import React, { Component } from 'react'
import SearchLocation from './searchLocation.js'
import SearchKeyWords from './searchKeywords.js'
import SelectLanguage from './selectLanguage.js'

export default class MainSearch extends Component {
  render (){
  return (
    <div>
      <SelectLanguage/>
      <SearchLocation/>
      <SearchKeyWords/>
    </div>
  )
  }
}