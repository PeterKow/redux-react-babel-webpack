import React, { Component } from 'react';


export default class HeaderMenu extends Component {
  render() {
    return  (
      <div style={articlesContainerStyle}>
          <h2 style={{textAlign: 'center'}}>TwitterSearch</h2>
          <a href="/auth/twitter" className="tweetbutton" title="Sign in">Sign in</a>
      </div>
      );
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
  marginBottom: 10,
  WebkitFontSmoothing: 'antialiased',
  MozFontSmoothing: 'antialiased',
  fontSmoothing: 'antialiased',
  fontWeight: 300,
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px, rgba(0, 0, 0, 0.0980392) 0px 25px 50px 0px'
};