import React, { Component } from 'react'
import Profile from '../../containers/profile/containers/profile.container.js'
import { connect } from 'react-redux'

class ProfilePage extends Component{
  render() {
    const { user } = this.props
    return <Profile user={user.toJSON()}/>
  }
}

function select(state){
  return {
    user: state.user
  }
}

export default connect(select)(ProfilePage)