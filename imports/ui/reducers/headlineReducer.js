import {
    FETCH_HEADLINES_BEGIN,
    FETCH_HEADLINES_SUCCESS,
    FETCH_HEADLINES_FAILURE
} from '../actions/headlineAction';

import headlines from '../seeds/headlines';
import { FETCH_COMPANIES_FAILURE } from '../actions/companyActions';

const initialState = {
    headlines
}


const headlineReducer = (state = initialState, action) => {
   switch (action.type) {
       case FETCH_HEADLINES_BEGIN:
           return console.log ('loading');
       case FETCH_HEADLINES_SUCCESS:
           return {
               ... state,
               state: action.payload.headlines
           };
       case FETCH_COMPANIES_FAILURE:
           return {
               ... state,
               state: action.payload.error
           }
        default:
            return state;
   }
};


export default headlineReducer;