import React, { Component, PropTypes } from 'react';

export default class MiniArticle extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? "line-through" : "none",
          cursor: this.props.completed ? "default" : "pointer"
        }}>
        {this.props.text}
      </li>
    );
  }
}

MiniArticle.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};