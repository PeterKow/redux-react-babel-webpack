import React, { Component } from 'react'

export default class Dropdown extends Component {

  render() {
    const { state } = this.props

    return (
      <div className={state}>
        <ul className="dropdown-menu">
          <li><a href="/auth/twitte">Sign in</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div>
    )
  }
}

Dropdown.propTypes = {
  state: React.PropTypes.string.isRequired
}