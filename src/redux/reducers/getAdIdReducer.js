import { type as getAdId } from '../actions/getAdId';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getAdId: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;