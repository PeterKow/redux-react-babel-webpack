import React, { Component } from 'react'

export default class Dropdown extends Component {

  render() {
    const { state } = this.props

    return (
      <div className={state}>
        <ul className="dropdown-menu">
          { this.props.children }
        </ul>
      </div>
    )
  }
}

Dropdown.propTypes = {
  state: React.PropTypes.string.isRequired
}