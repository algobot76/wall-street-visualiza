import {
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE
} from '../actions/newsActions';

const initialState = {
  news: {},
  error: {}
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case FETCH_NEWS_BEGIN:
    default:
      return state;
  }
};

export default newsReducer;
