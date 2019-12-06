import { UPDATE_USER, UPDATE_USER_ERROR } from '../actions/types';

const initialStore = {
    user: ''
}

const userReducer = (state = initialStore, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return state;
        case UPDATE_USER_ERROR:
            return state;
        default:
            return state;
    }
}

export default userReducer;