
import  { type as listCareers } from '../actions/get-list-careers';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case listCareers: {
            return payload;
        }
        default:
            return state;
    }
}

export default reducer;