import { type as getUser } from '../actions/get-user';

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getUser: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;