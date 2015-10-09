import React, { Component } from 'react'


export default class Profile extends Component {

  componentWillMount() {
    fetch('/profile', {
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then((data) => { console.log('data', data )})
  }

  render() {
    return (<h1>Hello</h1>)
  }
}
