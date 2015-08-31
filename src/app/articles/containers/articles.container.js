/**
 * Created by Peter on 30/08/15.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMiniArticle, completeMiniArticle, setVisibilityFilter, VisibilityFilters } from '../actions';
import AddMiniArticle from '../components/addMiniArticle.jsx';
import MiniArticleList from '../components/miniArticleList.jsx';
import Filter from '../components/filter.jsx';

export default class Articles extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div style={articlesContainerStyle}>
        <AddMiniArticle
          onAddClick={text =>
            dispatch(addMiniArticle(text))
          } />
        <MiniArticleList
          miniarticles={visibleTodos}
          onMiniArticleClick={index =>
            dispatch(completeMiniArticle(index))
          } />
        <Filter
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          } />
      </div>
    );
  }
};

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

function selectMiniArticles(miniArticles, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return miniArticles;
    case VisibilityFilters.SHOW_COMPLETED:
      return miniArticles.filter(miniarticle => miniarticle.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return miniArticles.filter(miniarticle => !miniarticle.completed);
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectMiniArticles(state.miniarticles, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Articles);