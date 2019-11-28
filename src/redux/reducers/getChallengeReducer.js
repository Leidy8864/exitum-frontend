import { type as getChallenge } from '../actions/get-challenge';

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getChallenge: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;