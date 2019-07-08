import {
  FETCH_HEADLINES_BEGIN,
  FETCH_HEADLINES_SUCCESS,
  FETCH_HEADLINES_FAILURE
} from '../actions/headlineActions';

const initialState = {

};

const headlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEADLINES_SUCCESS:
      return {
        ...state,
        selectedCompany: action.payload.headlines
      };
    case FETCH_HEADLINES_FAILURE:
      return {
        ...state,
        state:action.payload.error
      };
    case FETCH_HEADLINES_BEGIN:
    default:
      return state;
  }
};

export default headlineReducer;
