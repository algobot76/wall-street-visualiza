import {
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE
} from '../actions/newsActions';




const initialState = {

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

    case FETCH_NEWS_BEGIN:
    default:
      return state;
  }
};

export default newsReducer;
