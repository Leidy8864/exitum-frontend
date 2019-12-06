import { type as getEventType } from '../actions/getEventType';

const defaultState = "events";

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getEventType: {
            return payload
        }

        default:
            return state;
    }
}

export default reducer;