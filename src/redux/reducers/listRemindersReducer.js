import { type as listReminders } from '../actions/list-reminders';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case listReminders: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;