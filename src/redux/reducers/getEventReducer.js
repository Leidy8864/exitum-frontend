import { type as getEvent } from '../actions/getEvent';

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getEvent: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;