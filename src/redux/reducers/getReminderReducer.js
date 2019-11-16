import { type as getReminder } from '../actions/get-reminder';

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getReminder: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;