import { type as listEducations } from '../actions/list-educations';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case listEducations: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;