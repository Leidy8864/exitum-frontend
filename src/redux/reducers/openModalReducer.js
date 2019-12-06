import { type as openModal } from '../actions/openModal';

const defaultState = false;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case openModal: {
            return payload
        }

        default:
            return state;
    }
}

export default reducer;