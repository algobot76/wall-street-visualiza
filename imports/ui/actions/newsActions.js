import { newsGetBySymbol } from '../../api/news/methods';

export const NEWS_GET_BY_SYMBOL_BEGIN = 'NEWS_GET_BY_SYMBOL_BEGIN';
export const NEWS_GET_BY_SYMBOL_SUCCESS = 'NEWS_GET_BY_SYMBOL_SUCCESS';
export const NEWS_GET_BY_SYMBOL_FAILURE = 'NEWS_GET_BY_SYMBOL_FAILURE';

export const fetchNewsBySymbol = symbol => {
  return dispatch => {
    dispatch(fetchNewsBySymbolBegin());
    newsGetBySymbol.call({ symbol }, (error, result) => {
      if (error) {
        dispatch(fetchNewsBySymbolFailure(error.message));
      } else {
        if (result.articles) {
          dispatch(fetchNewsBySymbolSuccess(result.articles));
        } else {
          dispatch(fetchNewsBySymbolSuccess([]));
        }
      }
    });
  };
};

export const fetchNewsBySymbolBegin = () => ({
  type: NEWS_GET_BY_SYMBOL_BEGIN
});

export const fetchNewsBySymbolSuccess = articles => ({
  type: NEWS_GET_BY_SYMBOL_SUCCESS,
  payload: { articles }
});

export const fetchNewsBySymbolFailure = error => ({
  type: NEWS_GET_BY_SYMBOL_FAILURE,
  payload: { error }
});
