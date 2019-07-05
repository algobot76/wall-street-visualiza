import { FETCH_NEWS_BEGIN, 
         FETCH_NEWS_SUCCESS, 
         FETCH_NEWS_FAILURE}
 from '../actions/newsActions';
import news from '../seeds/news';


const initialState = {
  news
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_BEGIN:
      return console.log('loading');
    case FETCH_NEWS_SUCCESS:
      return {
          ... state,
          state : action.payload.news
      };
    case FETCH_NEWS_FAILURE:
       return {
         ... state,
         state: action.payload.error
       }
    default:
      return state;
  }
};

export default newsReducer;
