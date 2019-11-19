import { type as listExperiences } from '../actions/list-experiences';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case listExperiences: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;