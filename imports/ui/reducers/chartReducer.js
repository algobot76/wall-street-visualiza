import { UPDATE_INDICES } from '../actions';

const initialState = {
  startIndex: 0,
  endIndex: 0
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INDICES:
      return {
        ...state,
        startIndex: action.payload.startIndex,
        endIndex: action.payload.endIndex
      };
    default:
      return state;
  }
};

export default chartReducer;
