import {
  SPECIFIC_STOCK_REQUEST_BEGIN,
  SPECIFIC_STOCK_REQUEST_SUCCESS,
  SPECIFIC_STOCK_REQUEST_FAILURE
} from '../actions/stockActions';

const initialState = {
  prices: [],
  error: ''
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPECIFIC_STOCK_REQUEST_SUCCESS:
      return {
        ...state,
        prices: action.payload.prices,
        error: ''
      };
    case SPECIFIC_STOCK_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case SPECIFIC_STOCK_REQUEST_BEGIN:
    default:
      return state;
  }
};

export default stockReducer;
