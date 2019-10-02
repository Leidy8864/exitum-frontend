import { AUTH_SIGN_UP, AUTH_ERROR } from '../actions/'

const DEFAULT_STATE = {
    isAuthenticate: false,
    token: '',
    errorMessage: ''
}

export default(state = DEFAULT_STATE, {type,payload}) => {
    switch (type) {
        case AUTH_SIGN_UP:
            console.log('go to AUTH_SIGN_UP in action');
            return {
                ...state,
                token: payload,
                isAuthenticate: true,
                errorMessage: ''
            }
        case AUTH_ERROR:
            console.log('go to AUTH_ERROR in action');
            return {
                ...state,
                errorMessage: payload
            }
        default:
            return state;
        }
}