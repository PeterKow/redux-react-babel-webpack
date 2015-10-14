/**
 * Created by Peter on 15/09/15.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import AddMiniArticle from '../../containers/articles/components/addMiniArticle.jsx';
import Filter from '../../containers/articles/components/filter.jsx';
import Articles from '../../containers/articles/containers/articles.container.js'
import { addMiniArticle, setVisibilityFilter, VisibilityFilters, fetchMiniArticles }
  from '../../containers/articles/actions';

export default class MainPage extends Component {

  render() {

    const { dispatch, miniArticles, visibilityFilter } = this.props;
    const data = miniArticles.length ? miniArticles :  [];
    const isFetching = !!miniArticles.isFetching;

    return  (
        <div>
          <AddMiniArticle
            onAddClick={text =>
            dispatch(addMiniArticle(text))
          } />
        <Articles isFetching={isFetching} miniArticles={data}/>
          <Filter
            filter={visibilityFilter}
            onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          } />
        </div>
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
    miniArticles: selectMiniArticles(state.miniarticles, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    searchArticles: state.searchArticles
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(MainPage);


