import { headlinesGetAll } from '../../api/headlines/methods';

export const FETCH_HEADLINES_BEGIN = 'FETCH_HEADLINES_BEGIN';
export const FETCH_HEADLINES_SUCCESS = 'FETCH_HEADLINES_SUCCESS';
export const FETCH_HEADLINES_FAILURE = 'FETCH_HEADLINE_FAILURE';

export const fetchHeadlines = () => {
  return dispatch => {
    dispatch(fetchHeadlinesBegin());
    headlinesGetAll.call({}, (error, result) => {
      if (error) {
        dispatch(fetchHeadlinesFailure(error.message));
      } else {
        dispatch(fetchHeadlinesSuccess(result));
      }
    });
  };
};

export const fetchHeadlinesBegin = () => ({
  type: FETCH_HEADLINES_BEGIN
});

export const fetchHeadlinesSuccess = headlines => ({
  type: FETCH_HEADLINES_SUCCESS,
  payload: { headlines }
});

export const fetchHeadlinesFailure = error => ({
  type: FETCH_HEADLINES_FAILURE,
  payload: { error }
});
