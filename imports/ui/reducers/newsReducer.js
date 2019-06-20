import { FETCH_HEADLINES } from '../actions';
import headlines from '../seeds/headlines';

const initialState = {
  headlines
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEADLINES:
    default:
      return state;
  }
};

export default newsReducer;
