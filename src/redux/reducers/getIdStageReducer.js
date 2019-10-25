import  { type as getIdActualStage } from '../actions/get-id-actual-stage';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getIdActualStage: {
            return payload;
        }
        default:
            return state;
    }
}

export default reducer;