/**
 * Created by Peter on 30/08/15.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeMiniArticle, fetchMiniArticles} from '../actions';
import MiniArticleList from '../components/miniArticleList.jsx';

export default class Articles extends Component {

  componentWillMount () {
    const { dispatch, searchArticles } = this.props;
    dispatch(fetchMiniArticles(searchArticles.toJSON()));
  }

  propTypes: {
    miniArticles: React.PropTypes.array.isRequired
    }

  componentDidUpdate (newProps) {
    const { dispatch, searchArticles } = this.props;
    if (newProps.searchArticles.toString()  !==  searchArticles.toString()){
      dispatch(fetchMiniArticles(searchArticles.toJSON()));
    }
  }

  render() {
    // Injected by connect() call:
    const { dispatch, miniArticles } = this.props;

    return (
        <MiniArticleList
          miniarticles={miniArticles}
          onMiniArticleClick={index =>dispatch(completeMiniArticle(index))} />
    );
  }
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    searchArticles: state.searchArticles
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Articles);