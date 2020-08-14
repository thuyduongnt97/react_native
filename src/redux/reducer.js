import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import gallery from './GalleryState';
import app from '../modules/AppState';
import calendar from '../modules/calendar/CalendarState'

import login from './login'
import links from './links'
import groups from './groups'
import chart from './chart';

export default combineReducers({
  // ## Generator Reducers
  gallery,
  app,
  calendar,
  login,
  links,
  chart,
  groups,
});
