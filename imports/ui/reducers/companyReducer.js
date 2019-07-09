import {
  FETCH_COMPANIES_BEGIN,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAILURE,
  SELECT_COMPANY
} from '../actions/companyActions';

const initialState = {
  names: [],
  selectedCompany: 'AAPL',
  error: {}
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        names: action.payload.companies.map(company => company.symbol).sort()
      };
    case FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case FETCH_COMPANIES_BEGIN:
    default:
      return state;
  }
};

export default companyReducer;
