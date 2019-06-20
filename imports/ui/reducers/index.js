import { combineReducers } from 'redux';
import companies from './companyReducer';
import news from './newsReducer';

export default combineReducers({
  companies,
  news
});
