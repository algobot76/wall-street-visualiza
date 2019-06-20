import { combineReducers } from 'redux';
import companies from './companyReducer';
import news from './newsReducer';
import chart from './chartReducer';

export default combineReducers({
  companies,
  news,
  chart,
});
