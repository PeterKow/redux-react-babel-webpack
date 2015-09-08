/*
 * action types
 */

export const ADD_MINIARTICLE = 'ADD_MINIARTICLE';
export const COMPLETE_MINI_ARTICLE = 'COMPLETE_MINI_ARTICLE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
/*
 * action creators
 */

export function addMiniArticle(text) {
  return { type: ADD_MINIARTICLE, text };
}

export function completeMiniArticle(id) {
  return { type: COMPLETE_MINI_ARTICLE, id };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}