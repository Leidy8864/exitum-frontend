import { type as findResultsType } from '../actions/clean-sign-up';

const defaultState = true;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findResultsType: {
            if(payload === "1"){
                return true;
            }else{
                return false;
            }
        }

        default:
            return state;
    }
}

export default reducer;