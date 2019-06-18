export const SELECT_COMPANY = 'SELECT_COMPANY';

export const selectCompany = company => ({
  type: SELECT_COMPANY,
  payload: { company }
});
