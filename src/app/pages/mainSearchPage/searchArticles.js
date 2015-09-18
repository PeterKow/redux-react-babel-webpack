import React, { Component } from 'react'
import MainSearch from '../../containers/searchArticles/components/mainSearch.js'


const positionAbsolute = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  margin: 'auto',
  padding: 5,
  maxWidth: 700,
  maxHeight: 300
}

const logo = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '10px 0 10px 0'
}

export default class SearchArticles extends Component{
  handleSubmit (e){
    console.log('meee', e)
  }

  render (){
    return (
      <div style={positionAbsolute}>

        <img src="/images/aurity_logo_v32_big.png" style={logo}/>
        <MainSearch onChange={ this.handleSubmit }/>

      </div>
    )
  }
}





