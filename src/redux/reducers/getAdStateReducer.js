import { type as getAdState } from '../actions/getAdState';

const defaultState = "";

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getAdState: {
            return payload
        }

        default:
            return state;
    }
}

export default reducer;