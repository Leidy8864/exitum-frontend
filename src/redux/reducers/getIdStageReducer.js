import getIdActualStage from '../actions/get-id-actual-stage';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getIdActualStage: {
            return payload;
        }

        default:
            return 0;
    }
}

export default reducer;