import { type as getEducation } from '../actions/get-education';

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getEducation: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;