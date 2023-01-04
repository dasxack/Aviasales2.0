import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { ticketReducer } from './ticketReducer';
import { loadReducer } from './loadReducer';
import { sliceReducer } from './sliceReducer';
import { searchReducer } from './searchReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  ticketReducer,
  filterReducer,
  loadReducer,
  sliceReducer,
  searchReducer,
  errorReducer,
});
