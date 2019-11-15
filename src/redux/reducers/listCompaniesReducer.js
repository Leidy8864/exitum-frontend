import { type as listCompanies } from '../actions/get-list-companies';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case listCompanies: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;