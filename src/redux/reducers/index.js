import { combineReducers } from 'redux'
import  { reducer as formReducer } from 'redux-form'
import userReducer from './user';
import cleanFormReducer from './cleanFormReducer';

export default combineReducers({
    form: formReducer,
    user : userReducer,
    cleanFormReducer: cleanFormReducer,
});