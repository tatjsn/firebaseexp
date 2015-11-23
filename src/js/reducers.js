import { combineReducers } from 'redux';
import { RECEIVE_ENTRY } from './actions';

function entries(state = [], action) {
  switch (action.type) {
    case RECEIVE_ENTRY:
      return [...state, action.payload];
    default:
      return state;
  }
}

export const app = combineReducers({
  entries
});
