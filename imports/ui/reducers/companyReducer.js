import { FETCH_COMPANIES, SELECT_COMPANY, QUERY } from '../actions';

import stocks from '../seeds/stocks';

const initialState = {
  names: ['AAPL', 'FB', 'MSFT', 'TSLA'],
  selectedCompany: 'AAPL',
  data: stocks
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
    case QUERY:
      return {
        ...state,
        query: action.payload.query
      };
    default:
      return state;
  }
};

export default companyReducer;
