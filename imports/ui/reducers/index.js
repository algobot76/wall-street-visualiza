import { combineReducers } from 'redux';
import companies from './companyReducer';
import news from './newsReducer';
import chart from './chartReducer';
import stocks from './stockReducer';
import headlines from './headlineReducer';
export default combineReducers({
  companies,
  chart,
  stocks,
  headlines,
  news
});
