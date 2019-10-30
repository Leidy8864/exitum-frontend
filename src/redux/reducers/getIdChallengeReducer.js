import  { type as getIdChallenge  } from '../actions/getIdChallenge';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getIdChallenge: {
            return payload;
        }
        default:
            return state;
    }
}

export default reducer;