import { FETCH_COMPANIES, SELECT_COMPANY, SEARCH_QUERY } from '../actions';

const initialState = {
  names: ['AAPL', 'FB', 'MSFT', 'TSLA'],
  selectedCompany: 'AAPL'
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COMPANY:
      return {
        ...state,
        selectedCompany: action.payload.company
      };
    case FETCH_COMPANIES:
      return {
        ...state,
        names: ['AAPL', 'FB', 'MSFT', 'TSLA']
      };
    case SEARCH_QUERY:
      return {
        ...state,
        query: action.payload.query
      };
    default:
      return state;
  }
};

export default companyReducer;
