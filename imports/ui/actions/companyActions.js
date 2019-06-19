export const SELECT_COMPANY = 'SELECT_COMPANY';

export const selectCompany = company => ({
  type: SELECT_COMPANY,
  payload: { company }
});

export const FETCH_COMPANIES = 'FETCH_COMPANIES';

export const fetchCompanies = () => ({
  type: FETCH_COMPANIES
});

export const QUERY = 'QUERY';

export const search = query => ({
  type: QUERY,
  payload: { query }
});
