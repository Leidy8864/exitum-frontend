import { type as gettUniversities } from '../actions/get-list-universities';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case gettUniversities: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;