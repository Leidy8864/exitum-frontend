import { type as getAdvert } from '../actions/getAdvert';

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getAdvert: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;