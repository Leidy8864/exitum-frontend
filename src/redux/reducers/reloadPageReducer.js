import { type as RELOAD_PAGE } from '../actions/reloadPage';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case RELOAD_PAGE: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;