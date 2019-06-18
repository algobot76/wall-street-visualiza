import { SELECT_COMPANY } from '../actions';

const initialState = {
  selectedCompany: 'AAPL'
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COMPANY:
      return {
        ...state,
        selectedCompany: action.payload.company
      };
    default:
      return state;
  }
};

export default companyReducer;
