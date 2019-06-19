import { FETCH_COMPANIES, SELECT_COMPANY, QUERY } from '../actions';

const data = [
  { date: 'Dec 02', price: 109.9 },
  { date: 'Dec 05', price: 109.11 },
  { date: 'Dec 06', price: 109.95 },
  { date: 'Dec 07', price: 111.03 },
  { date: 'Dec 08', price: 112.12 },
  { date: 'Dec 09', price: 113.95 },
  { date: 'Dec 12', price: 113.3 },
  { date: 'Dec 13', price: 115.19 },
  { date: 'Dec 14', price: 115.19 },
  { date: 'Dec 15', price: 115.82 },
  { date: 'Dec 16', price: 115.97 },
  { date: 'Dec 19', price: 116.64 },
  { date: 'Dec 20', price: 116.95 },
  { date: 'Dec 21', price: 117.06 },
  { date: 'Dec 22', price: 116.29 },
  { date: 'Dec 23', price: 116.52 },
  { date: 'Dec 27', price: 117.26 },
  { date: 'Dec 28', price: 116.76 },
  { date: 'Dec 29', price: 116.73 },
  { date: 'Dec 30', price: 115.82 }
];

const initialState = {
  names: ['AAPL', 'FB', 'MSFT', 'TSLA'],
  selectedCompany: 'AAPL',
  data
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
