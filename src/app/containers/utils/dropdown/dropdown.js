import React, { Component } from 'react'

export default class Dropdown extends Component {

  render() {
    const { state } = this.props

    return (
      <div className={state}>
        <ul className="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
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