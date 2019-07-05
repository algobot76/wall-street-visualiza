import {
    FETCH_STOCKS_BEGIN,
    FETCH_STOCKS_SUCCESS,
    FETCH_STOCKS_FAILURE,
    SELECT_STOCK
  } from '../actions/stockAction';
  
  import stocks from '../seeds/stocks';
  
  const initialState = {
    names: [],
    selectedCompany: 'AAPL',
    data: stocks
  };
  
  const stockReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_STOCK:
        return {
          ...state,
          selectedCompany: action.payload.company
        };
      case FETCH_STOCKS_SUCCESS:
        return {
          ...state,
          names: action.payload.stocks.map(stock => stock.company),
          prices: action.payload.stocks.map(stock => stock.prices)
        };
      case FETCH_STOCKS_BEGIN:
        return console.log("data is loading");
      case FETCH_STOCKS_FAILURE:
        return console.log ("unable to retreive data");
      default:
        return state;
    }
  };
  
  export default stockReducer;
  