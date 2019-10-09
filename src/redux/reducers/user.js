import { UPDATE_USER, UPDATE_USER_ERROR } from '../actions/types';

const initialStore = {
    user: ''
}

const userReducer = (state = initialStore, action) => {
    switch (action.type) {
        case UPDATE_USER:
            console.log("UPDATED USER", action.user);
            return state;
        case UPDATE_USER_ERROR:
            console.log("ERROR UPDATE USER", action.error);
            return state;
        default:
            return state;
    }
}

export default userReducer;