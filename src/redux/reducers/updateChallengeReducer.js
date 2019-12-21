import { type as updateChallenge } from '../actions/update-challenge';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case updateChallenge: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;