/**
 * Created by Peter on 30/08/15.
 */
import React, { Component } from 'react';
import MiniArticle from '../components/miniArticle.jsx';
import MiniArticleList from '../components/miniArticleList.jsx';
import Filter from '../components/filter.jsx';

export default class Articles extends Component {
  render() {
    return (
      <div>
        <MiniArticle
          onAddClick={text =>
            console.log('add todo', text)
          } />
        <MiniArticleList
          miniarticles={[{
            text: 'Use Redux',
            completed: true
          }, {
            text: 'Learn to connect it to React',
            completed: false
          }]}
          onTodoClick={todo =>
            console.log('todo clicked', todo)
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