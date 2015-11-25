import { combineReducers } from 'redux';
import { RECEIVE_ENTRY } from './actions';
import { RECEIVE_AUTH } from './actions';

function entries(state = [], action) {
  switch (action.type) {
    case RECEIVE_ENTRY:
      return [action.payload, ...state].slice(0, 3);
    default:
      return state;
  }
}

function auth(state = {}, action) {
  switch (action.type) {
    case RECEIVE_AUTH:
      return action.payload;
    default:
      return state;
  }
}

export const app = combineReducers({
  entries,
  auth
});
