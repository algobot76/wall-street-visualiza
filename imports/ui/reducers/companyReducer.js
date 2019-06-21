import { FETCH_COMPANIES, SELECT_COMPANY, QUERY } from '../actions';

import stocks from '../seeds/stocks';

const initialState = {
  names: [],
  selectedCompany: 'AAPL',
  data: stocks
};
const companies = [
  'BAC',
  'AAPL',
  'BNS',
  'FB',
  'TSLA',
  'TD',
  'SBUX',
  'SHOP',
  'RY',
  'NKE',
  'NTGR',
  'NFLX',
  'GOOG',
  'GS',
  'GM',
  'F',
  'DIS',
  'CM',
  'BMO',
  'BBY'
];

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
        names: companies.sort()
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
