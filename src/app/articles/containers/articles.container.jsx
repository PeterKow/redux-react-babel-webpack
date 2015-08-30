/**
 * Created by Peter on 30/08/15.
 */
import React, { Component } from 'react';
import AddMiniArticle from '../components/addMiniArticle.jsx';
import MiniArticle from '../components/miniArticle.jsx';
import MiniArticleList from '../components/miniArticleList.jsx';
import Filter from '../components/filter.jsx';

export default class Articles extends Component {
  render() {
    // Injected by connect() call:
    //const { dispatch, visibleTodos, visibilityFilter } = this.props;

    return (
      <div>
        <AddMiniArticle
          onAddClick={text =>
            console.log('add miniArticle', text)
          } />
        <MiniArticle
          onAddClick={text =>
            console.log('add miniArticle', text)
          } />
        <MiniArticleList
          miniarticles={[{
            text: 'Use Redux',
            completed: true
          }, {
            text: 'Learn to connect it to React',
            completed: false
          }]}
          onMiniArticleClick={miniArticle =>
            console.log('miniArticle clicked', miniArticle)
          } />
        <Filter
          filter='SHOW_ALL'
          onFilterChange={filter =>
            console.log('filter change', filter)
          } />
      </div>
    );
  }
}