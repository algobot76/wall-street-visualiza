import { headlinesGetAll } from '../../api/companies/methods';


export const FETCH_HEADLINES_BEGIN = 'FETCH_HEADLINES_BEGIN';
export const FETCH_HEADLINES_SUCCESS = 'FETCH_HEADLINES_SUCCESS';
export const FETCH_HEADLINES_FAILURE = 'FETCH_HEADLINE_FAILURE';


export const fetchHeadline = () => {
   return dispatch => {
    dispatch(fetchHeadlineBegin());
    headlinesGetAll.call({},(error,result) => {
        if (error) {
          dispatch(fetchCompaniesFailure(error.message));
        }else {
          dispatch(fetchHeadlineSuccess(result));
        }
    });
   };
};


export const fetchHeadlineBegin = () => ({
    type: FETCH_HEADLINES_BEGIN
});

export const fetchHeadlineSuccess = headlines => ({
    type: FETCH_HEADLINES_SUCCESS,
    payload: { headlines }
});

export const fetchCompaniesFailure = error => ({
    type: FETCH_HEADLINES_FAILURE,
    payload: { error}
});