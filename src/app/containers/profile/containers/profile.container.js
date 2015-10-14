import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authTwitter } from '../../user/user.actions.js'


export default class Profile extends Component {

  componentWillMount() {

    const { dispatch } = this.props;

    dispatch(authTwitter())
    //fetch('/profile', {
    //  credentials: 'same-origin'
    //})
    //  .then(res => res.json())
    //  .then((data) => {
    //    console.log('dispatch', dispatch )
    //    console.log('data', data )
    //    dispatch(authTwitter())
    //  })


  }

  propTypes: {
    user: React.PropTypes.object.isRequired
    }

  render() {
    return (
      <div>
        <h1>Hello Peter</h1>
        <div>{JSON.stringify(this.props.user)}</div>
      </div>
    )
  }
}

export default connect(()=>({}))(Profile)
