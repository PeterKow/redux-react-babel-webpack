/**
 * Created by Peter on 15/09/15.
 */
import React, {Component} from 'react';
import Articles from '../articles/containers/articles.container.js'
import { Provider } from 'react-redux';

export default class MainPage extends Component {

  render() {
    return  (
      <div>
        <Articles />
      </div>
    );
  }
};

//<Provider store={store}>
//  {() => <Articles />}
//</Provider>