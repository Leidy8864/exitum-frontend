import { type as findResultsType } from '../actions/demo';
const defaultState = '';

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findResultsType: {
            return payload;
        }

        default:
            return state;
    }
}

export default reducer;
