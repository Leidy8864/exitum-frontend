import { type as getCertificate } from '../actions/get-certificate';

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getCertificate: 
        {
            return payload
        }
        default:
            return state;
    }
}

export default reducer;