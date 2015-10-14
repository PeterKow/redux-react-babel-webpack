import React, { Component } from 'react';
import HeaderMenu from '../../containers/headerMenu/containers/headerMenu.container.jsx';
import { RouteHandler } from 'react-router';

export default class mainApp extends Component {
  render() {
    return (
      <div>
        <HeaderMenu/>

        <div id="main" style={articlesContainerStyle}>
          {/* this will render the child routes */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

var articlesContainerStyle = {
  font: '14px "Helvetica Neue", Helvetica, Arial, sans-serif',
  lineHeight: 1.4,
  background: '#f5f5f5',
  color: '#4d4d4d',
  minWidth: 230,
  maxWidth: 850,
  margin: '0 auto',
  WebkitFontSmoothing: 'antialiased',
  MozFontSmoothing: 'antialiased',
  fontSmoothing: 'antialiased',
  fontWeight: 300,
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px, rgba(0, 0, 0, 0.0980392) 0px 25px 50px 0px'
};
