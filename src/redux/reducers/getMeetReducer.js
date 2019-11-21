import { type as getMeet } from '../actions/get-meet';

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getMeet: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;