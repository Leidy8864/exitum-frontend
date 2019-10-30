import { combineReducers } from 'redux'
import  { reducer as formReducer } from 'redux-form'
import userReducer from './user';
import cleanFormReducer from './cleanFormReducer';
import getIdProjectReducer from './getIdProjectReducer';
import getIdStageReducer from './getIdStageReducer';
import getListChallengesReducer from './getListChallengesReducer'
import getIdChallengeReducer from './getIdChallengeReducer'

export default combineReducers({
    form: formReducer,
    user : userReducer,
    cleanFormReducer: cleanFormReducer,
    getIdProjectReducer: getIdProjectReducer,
    getIdStageReducer: getIdStageReducer,
    getListChallengesReducer:getListChallengesReducer,
    getIdChallengeReducer:getIdChallengeReducer

});