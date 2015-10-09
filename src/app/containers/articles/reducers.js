import { combineReducers } from 'redux';
import { ADD_MINIARTICLE, COMPLETE_MINI_ARTICLE, SET_VISIBILITY_FILTER, NEW_MINI_ARTICLES, VisibilityFilters,
         FETCH_MINI_ARTICLES } from './actions';
import { twitterResultsSimple } from './mockTwitterResults.js'
import * as storage from '../../persistance/storage.js';
const { SHOW_ALL } = VisibilityFilters;


const initialState = twitterResultsSimple;

const initApplication = {
    token: storage.get('token'),
    locale: storage.get('locale') || 'en'
};

export function application(state = initApplication, action = { type : undefined}){
  return state;
}


export function visibilityFilter(state = SHOW_ALL, action = { type : undefined}) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export function miniarticles(state = initialState, action = { type : undefined}) {
  switch (action.type) {
    case FETCH_MINI_ARTICLES:
      return { isFetching: true }
    case NEW_MINI_ARTICLES:
      return action.newMiniArticles;
    case ADD_MINIARTICLE:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        completed: false,
        text: action.text
      }, ...state];
    case COMPLETE_MINI_ARTICLE:
      return state.map(miniArticle =>
          miniArticle.id === action.id ?
          { ...miniArticle, completed: !miniArticle.completed } :
            miniArticle
      );
    default:
      return state;
  }
}