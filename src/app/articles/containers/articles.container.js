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
      <div>
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
      //<div>
      //  <AddMiniArticle
      //    onAddClick={text =>
      //      console.log('add miniArticle', text)
      //    } />
      //  <MiniArticle
      //    onAddClick={text =>
      //      console.log('add miniArticle', text)
      //    } />
      //  <MiniArticleList
      //    miniarticles={[{
      //      text: 'Use Redux',
      //      completed: true
      //    }, {
      //      text: 'Learn to connect it to React',
      //      completed: false
      //    }]}
      //    onMiniArticleClick={miniArticle =>
      //      console.log('miniArticle clicked', miniArticle)
      //    } />
      //  <Filter
      //    filter='SHOW_ALL'
      //    onFilterChange={filter =>
      //      console.log('filter change', filter)
      //    } />
      //</div>
    );
  }
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