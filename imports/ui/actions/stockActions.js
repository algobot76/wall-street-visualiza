import { stocksGetAll } from '../../api/stocks/methods';

export const SELECT_STOCK = 'SELECT_STOCK';


export const selectStock = stock => ({
  type: SELECT_STOCK,
  payload: { stock }
});

export const FETCH_STOCKS_BEGIN = 'FETCH_STOCKS_BEGIN';
export const FETCH_STOCKS_SUCCESS = 'FETCH_STOCKS_SUCCESS';
export const FETCH_STOCKS_FAILURE = 'FETCH_STOCKS_FAILURE';

export const fetchStocks = () => {
  return dispatch => {
    dispatch(fetchStocksBegin());
    stocksGetAll.call({}, (error, result) => {
      if (error) {
        dispatch(fetchStocksFailure(error.message));
      } else {
        dispatch(fetchStocksSuccess(result));
      }
    });
  };
};

export const fetchStocksBegin = () => ({
  type: FETCH_STOCKS_BEGIN
});

export const fetchStocksSuccess = stocks => ({
  type: FETCH_STOCKS_SUCCESS,
  payload: { stocks}
});

export const fetchStocksFailure = error => ({
  type: FETCH_STOCKS_FAILURE,
  payload: { error }
});



