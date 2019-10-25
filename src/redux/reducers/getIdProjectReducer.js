import { type as getIdProject } from '../actions/get-id-project';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getIdProject: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;