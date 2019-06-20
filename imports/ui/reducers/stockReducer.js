import { FETCH_STOCK_PRICES } from '../actions';

import stocks from '../seeds/stocks';

const initialState = {
  data: []
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_PRICES:
      return {
        ...state,
        data: stocks.find(obj => obj.company === action.payload.company)
      };
    default:
      return state;
  }
};

export default stockReducer;
