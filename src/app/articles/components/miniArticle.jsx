import React, { Component, PropTypes } from 'react';

export default class MiniArticle extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={styles(this.props.completed)}>
        <div style={{padding: '9px 12px'}}>
          <div style={{marginLeft: 58, height: 50}}>
            <img style={imgStyle} src={this.props.image}></img>
            {this.props.text}
          </div>
        </div>
      </li>
    );
  }
}

const imgStyle = {
  borderRadius: '30px',
  float: 'left',
  marginLeft: '-58px',
  marginTop: '0px'
};


function styles(completed) {
  return {
    textDecoration: completed ? "line-through" : "none",
    cursor: completed ? "default" : "pointer",
    listStyleType: 'none'
  };
}

MiniArticle.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};