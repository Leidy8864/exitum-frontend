import { type as getExperience } from '../actions/get-experience';

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getExperience: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;