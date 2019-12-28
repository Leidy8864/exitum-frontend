import { type as showNotification } from '../actions/showNotification';

const defaultState = 1;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case showNotification: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;