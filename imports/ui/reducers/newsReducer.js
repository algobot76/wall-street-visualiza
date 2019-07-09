import {
  NEWS_GET_BY_SYMBOL_BEGIN,
  NEWS_GET_BY_SYMBOL_SUCCESS,
  NEWS_GET_BY_SYMBOL_FAILURE
} from '../actions';

const initialState = {
  articles: [],
  error: ''
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_GET_BY_SYMBOL_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
        error: ''
      };
    case NEWS_GET_BY_SYMBOL_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };

    case NEWS_GET_BY_SYMBOL_BEGIN:
    default:
      return state;
  }
};

export default newsReducer;
