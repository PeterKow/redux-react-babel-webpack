import React, { Component } from 'react';
import HeaderMenu from '../headerMenu/containers/headerMenu.container.jsx';
import { RouteHandler } from 'react-router';

export default class mainApp extends Component {
  render() {
    return (
      <div>
        <HeaderMenu/>

        <div id="main">
          {/* this will render the child routes */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

//<HeaderMenu/>
//<div className="container-fluid">
//  <RouteHandler/>
//  </div>
