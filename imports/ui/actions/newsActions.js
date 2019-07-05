import { newsGetAll } from '../../api/news/methods';



export const FETCH_NEWS_BEGIN = 'FETCH_NEWS_BEGIN';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE'

export const fetchNews = () => {
  return dispatch => {
    dispatch(fetchNewsBegin());
    newsGetAll.call({}, (error, result) => {
      if (error) {
        dispatch(fetchNewsFailure(error.message));
      } else {
        dispatch(fetchNewsSuccess(result));
      }
    });
  };
};



export const fetchNewsBegin = () => (
  {
    type: FETCH_NEWS_BEGIN
});


export const fetchNewsSuccess = () => (
  {
    type: FETCH_NEWS_SUCCESS,
    payload: {news}
});



export const fetchNewsFailure = () => (
  {
    type: FETCH_NEWS_FAILURE,
    payload: {error}
});


/*
export const fetchHeadlines = () => ({
  type: FETCH_HEADLINES
});

export const FETCH_NEWS = 'FETCH_NEWS';

export const fetchNews = () => ({
  type: FETCH_NEWS
});
*/