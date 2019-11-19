import  { type as getTipId  } from '../actions/getTipId';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getTipId: {
            return payload;
        }
        default:
            return state;
    }
}

export default reducer;