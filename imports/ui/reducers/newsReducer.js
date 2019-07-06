import {
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE
} from '../actions/newsActions';

import {
  FETCH_HEADLINES_BEGIN,
  FETCH_HEADLINES_SUCCESS,
  FETCH_HEADLINES_FAILURE
} from '../actions/headlineActions';

import headlines from '../seeds/headlines';
import news from '../seeds/news';

const initialState = {
  headlines,
  news
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        state: action.payload.news
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        state: action.payload.error
      };
    case FETCH_HEADLINES_SUCCESS:
      return {
        ...state,
        state: action.payload.headlines
      };
    case FETCH_HEADLINES_FAILURE:
      return {
        ...state,
        state: action.payload.error
      };
    case FETCH_HEADLINES_BEGIN:
      return state;
    case FETCH_NEWS_BEGIN:
    default:
      return state;
  }
};

export default newsReducer;
