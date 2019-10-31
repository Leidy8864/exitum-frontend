import { type as listSkills } from '../actions/list-skills';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case listSkills: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;