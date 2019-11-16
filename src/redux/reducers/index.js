import { combineReducers } from 'redux'
import  { reducer as formReducer } from 'redux-form'
import userReducer from './user';
import cleanFormReducer from './cleanFormReducer';
import getIdProjectReducer from './getIdProjectReducer';
import getIdStageReducer from './getIdStageReducer';
import getListChallengesReducer from './getListChallengesReducer'
import getIdChallengeReducer from './getIdChallengeReducer'
import getCertificateReducer from './getCertificateReducer'
import listCertificationsReducer from './listCertificationsReducer'
import getEducationReducer from './getEducationReducer'
import listEducationsReducer from './listEducationsReducer'
import listSkillsReducer from './listSkillsReducer'
import openModalReducer from './openModalReducer';
import getAdStateReducer from './getAdStateReducer';
import getTypeAdsReducer from './getTypeAdsReducer';
import getAdIdReducer from './getAdIdReducer';
import getListAdsReducer from './getListAdsReducer';
import getAdvertReducer from '../reducers/getAdvertReducer';
<<<<<<< HEAD
import getReminderReducer from '../reducers/getReminderReducer'
=======
import listUniversitiesReducer from './listUniversitiesReducer';
import listCompaniesReducer from './listCompaniesReducer';

>>>>>>> d4e0e9a62ef50577dd3ff0f5262ed3e42abea69a
export default combineReducers({
    form: formReducer,
    user : userReducer,
    cleanFormReducer: cleanFormReducer,
    getIdProjectReducer: getIdProjectReducer,
    getIdStageReducer: getIdStageReducer,
    getListChallengesReducer:getListChallengesReducer,
    getIdChallengeReducer:getIdChallengeReducer,
    getCertificateReducer:getCertificateReducer,
    listCertificationsReducer:listCertificationsReducer,
    getEducationReducer: getEducationReducer,
    listEducationsReducer: listEducationsReducer,
    listSkillsReducer: listSkillsReducer,
    openModalReducer: openModalReducer,
    getAdStateReducer : getAdStateReducer,
    getTypeAdsReducer : getTypeAdsReducer,
    getAdIdReducer : getAdIdReducer,
    getListAdsReducer : getListAdsReducer,
    getAdvertReducer :getAdvertReducer,
<<<<<<< HEAD
    getReminderReducer : getReminderReducer
=======
    listUniversitiesReducer : listUniversitiesReducer,
    listCompaniesReducer : listCompaniesReducer,
>>>>>>> d4e0e9a62ef50577dd3ff0f5262ed3e42abea69a
});