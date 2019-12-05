import { type as activeBackButton } from '../actions/activeBackButton';

const defaultState = false;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case activeBackButton: {
            return payload;
        }
        default:
            return state;
    }
}

export default reducer;