import {
  stocksGetAll,
  stocksGetSpecificStockInfo
} from '../../api/stocks/methods';

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
  payload: { stocks }
});

export const fetchStocksFailure = error => ({
  type: FETCH_STOCKS_FAILURE,
  payload: { error }
});

export const SPECIFIC_STOCK_REQUEST_BEGIN = 'SPECIFIC_STOCK_REQUEST_BEGIN';
export const SPECIFIC_STOCK_REQUEST_SUCCESS = 'SPECIFIC_STOCK_REQUEST_SUCCESS';
export const SPECIFIC_STOCK_REQUEST_FAILURE = 'SPECIFIC_STOCK_REQUEST_FAILURE';

export const specificStockRequest = company => {
  return dispatch => {
    dispatch(specificStockRequestBegin());
    stocksGetSpecificStockInfo.call({ company }, (error, result) => {
      if (error) {
        dispatch(specificStockRequestFailure(error.message));
      } else {
        dispatch(specificStockRequestSuccess(result));
      }
    });
  };
};

export const specificStockRequestBegin = () => ({
  type: SPECIFIC_STOCK_REQUEST_BEGIN
});

export const specificStockRequestSuccess = company => ({
  type: SPECIFIC_STOCK_REQUEST_SUCCESS,
  payload: { company }
});

export const specificStockRequestFailure = error => ({
  type: SPECIFIC_STOCK_REQUEST_FAILURE,
  payload: { error }
});
