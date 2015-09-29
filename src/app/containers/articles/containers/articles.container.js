/**
 * Created by Peter on 30/08/15.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeMiniArticle, fetchMiniArticles} from '../actions';
import MiniArticleList from '../components/miniArticleList.jsx';

export default class Articles extends Component {

  propTypes: {
    miniArticles: React.PropTypes.array.isRequired,
    isFetching: React.PropTypes.bool.isRequired
    }

  render() {
    // Injected by connect() call:
    const { dispatch, miniArticles, isFetching } = this.props;

    if(isFetching) {
      return Loader()
    }

    return (
        <MiniArticleList
          miniarticles={miniArticles}
          onMiniArticleClick={index =>dispatch(completeMiniArticle(index))} />
    );

    function Loader() {
      return (
        <div style={{ margin: '0 auto', width: 100, padding: '50px 0 50px'}}>
          <i style={{ fontSize: 70}} className="fa fa-spinner fa-spin"></i>
          <h4>Loading...</h4>
        </div>)
    }
  }
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {};
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Articles);