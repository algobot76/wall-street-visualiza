import { companiesGetAll } from '../../api/companies/methods';

export const SELECT_COMPANY = 'SELECT_COMPANY';


export const selectCompany = company => ({
  type: SELECT_COMPANY,
  payload: { company }
});

export const FETCH_COMPANIES_BEGIN = 'FETCH_COMPANIES_BEGIN';
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS';
export const FETCH_COMPANIES_FAILURE = 'FETCH_COMPANIES_FAILURE';

export const fetchCompanies = () => {
  return dispatch => {
    dispatch(fetchCompaniesBegin());
    companiesGetAll.call({}, (error, result) => {
      if (error) {
        dispatch(fetchCompaniesFailure(error.message));
      } else {
        dispatch(fetchCompaniesSuccess(result));
      }
    });
  };
};

export const fetchCompaniesBegin = () => ({
  type: FETCH_COMPANIES_BEGIN
});

export const fetchCompaniesSuccess = companies => ({
  type: FETCH_COMPANIES_SUCCESS,
  payload: { companies }
});

export const fetchCompaniesFailure = error => ({
  type: FETCH_COMPANIES_FAILURE,
  payload: { error }
});



