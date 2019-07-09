import { stocksGetSpecificStockInfo } from '../../api/stocks/methods';

export const SPECIFIC_STOCK_REQUEST_BEGIN = 'SPECIFIC_STOCK_REQUEST_BEGIN';
export const SPECIFIC_STOCK_REQUEST_SUCCESS = 'SPECIFIC_STOCK_REQUEST_SUCCESS';
export const SPECIFIC_STOCK_REQUEST_FAILURE = 'SPECIFIC_STOCK_REQUEST_FAILURE';

export const specificStockRequest = name => {
  return dispatch => {
    dispatch(specificStockRequestBegin());
    stocksGetSpecificStockInfo.call({ company: name }, (error, result) => {
      if (error) {
        dispatch(specificStockRequestFailure(error.message));
      } else {
        dispatch(specificStockRequestSuccess(result.prices));
      }
    });
  };
};

export const specificStockRequestBegin = () => ({
  type: SPECIFIC_STOCK_REQUEST_BEGIN
});

export const specificStockRequestSuccess = prices => ({
  type: SPECIFIC_STOCK_REQUEST_SUCCESS,
  payload: { prices }
});

export const specificStockRequestFailure = error => ({
  type: SPECIFIC_STOCK_REQUEST_FAILURE,
  payload: { error }
});
