export const SELECT_COMPANY = 'SELECT_COMPANY';

export const selectCompany = company => ({
  type: SELECT_COMPANY,
  payload: { company }
});

export const FETCH_COMPANIES = 'FETCH_COMPANIES';

export const fetchCompanies = () => ({
  type: FETCH_COMPANIES
});

export const SEARCH_QUERY = 'SEARCH_QUERY';

export const searchQuery = query => ({
  type: SEARCH_QUERY,
  payload: { query }
});
