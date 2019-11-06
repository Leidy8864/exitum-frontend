import { type as getAdState } from '../actions/getAdState';

const defaultState = "active";

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