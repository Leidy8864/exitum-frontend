import { type as listCertifications } from '../actions/list-certifications';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case listCertifications: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;