import { type as listMeets } from '../actions/list-meets';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case listMeets: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;