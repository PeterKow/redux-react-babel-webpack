import React, { Component } from 'react'
import { connect } from 'react-redux'
import shallowEqual from 'react-redux/lib/utils/shallowEqual'
import MainSearch from '../../containers/searchArticles/mainSearch.container.js'
import { triggerNewSearchArticles } from './searchArticles.page.reducers.js'

export default class SearchArticles extends Component{

  onSubmit(formData) {
    const { dispatch } = this.props

    if(!shallowEqual(formData.oldData, formData.newData)) {
      dispatch(triggerNewSearchArticles(formData.newData))
    }
    this.props.history.pushState(null, `/`)
  }

  render (){
    return (
      <div style={positionAbsolute}>
        <img src="/images/aurity_logo_v32_big.png" style={logo}/>
        <MainSearch sendValues={::this.onSubmit}/>
      </div>
    )
  }
}

function select(state){
  return {}
}

export default connect(select)(SearchArticles);

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



