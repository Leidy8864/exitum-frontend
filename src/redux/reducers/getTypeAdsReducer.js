import { type as getTypeAds } from '../actions/getTypeAds';

const defaultState = "coincidence";

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getTypeAds: {
            return payload
        }

        default:
            return state;
    }
}

export default reducer;