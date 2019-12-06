import { type as getUsers } from '../actions/get-list-users';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getUsers: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;