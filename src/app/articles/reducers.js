import { combineReducers } from 'redux';
import { ADD_MINIARTICLE, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action = { type : 'READ'}) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function miniarticles(state = [], action = { type : 'READ'}) {
  switch (action.type) {
    case ADD_MINIARTICLE:
      return [...state, {
        text: action.text,
        completed: false
      }];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

const miniarticleApp = combineReducers({
  visibilityFilter,
  miniarticles
});

export default miniarticleApp;