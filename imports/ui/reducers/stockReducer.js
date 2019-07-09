import {
  FETCH_STOCKS_BEGIN,
  FETCH_STOCKS_SUCCESS,
  FETCH_STOCKS_FAILURE,
  SPECIFIC_STOCK_REQUEST_SUCCESS
} from '../actions/stockActions';

const initialState = {
  names: [],
  selectedStock: '',
  data: {} ,
  error: {}
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPECIFIC_STOCK_REQUEST_SUCCESS:
      return {
        ...state,
        selectedStock: action.payload.company,
        data: action.payload.prices
      };
    case FETCH_STOCKS_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case FETCH_STOCKS_BEGIN:
    default:
      return state;

    case FETCH_STOCKS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
  }
};

export default stockReducer;
