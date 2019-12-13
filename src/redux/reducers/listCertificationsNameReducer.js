import { type as certificationsListActions } from '../actions/list-certifications-name';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case certificationsListActions: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;