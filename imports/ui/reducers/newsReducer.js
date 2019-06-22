import { FETCH_HEADLINES, FETCH_NEWS } from '../actions';
import headlines from '../seeds/headlines';

import news from '../seeds/news';

const initialState = {
  headlines,
  news
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEADLINES:
      return state;
    case FETCH_NEWS:
      return state;
    default:
      return state;
  }
};

export default newsReducer;
