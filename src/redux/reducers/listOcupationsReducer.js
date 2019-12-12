import { type as listOcupations } from '../actions/get-list-ocupations';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case listOcupations: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;