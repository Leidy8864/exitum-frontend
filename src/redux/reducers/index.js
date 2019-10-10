import { combineReducers } from 'redux'
import  { reducer as formReducer } from 'redux-form'
import userReducer from './user';
import cleanSignUpReducer from './cleanSignUpReducer';

export default combineReducers({
    form: formReducer,
    user : userReducer,
    cleanSignUpReducer: cleanSignUpReducer,
});