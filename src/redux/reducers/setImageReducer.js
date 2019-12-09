import { type as setImage } from '../actions/setImage';

const defaultState = "";

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case setImage: {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;