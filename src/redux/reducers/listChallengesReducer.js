import { type as listChallenges } from '../actions/list-challenges';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case listChallenges: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;