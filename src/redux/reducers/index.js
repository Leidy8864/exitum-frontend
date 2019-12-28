import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userReducer from './user';
import cleanFormReducer from './cleanFormReducer';
import getIdProjectReducer from './getIdProjectReducer';
import getIdStageReducer from './getIdStageReducer';
import getListChallengesReducer from './getListChallengesReducer'
import getTipIdReducer from './getTipIdReducer'
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
import listUniversitiesReducer from './listUniversitiesReducer';
import listCompaniesReducer from './listCompaniesReducer';
import getReminderReducer from './getReminderReducer';
import listRemindersReducer from './listRemindersReducer';
import listUsersReducer from './listUsersReducer';
import getExperienceReducer from './getExperienceReducer';
import listExperiencesReducer from './listExperiencesReducer';
import reloadPageReducer from './reloadPageReducer';
import listMeetsReducer from './listMeetsReducer'
import getMeetReducer from './getMeetReducer'
import getEventTypeReducer from './getEventTypeReducer'
import getChallengeReducer from './getChallengeReducer'
import listChallengeReducer from './listChallengesReducer'
import getEventReducer from './getEventReducer'
import activeBackButtonReducer from './activeBackButtonReducer';
import setImageReducer from './setImageReducer';
import listOcupationsReducer from './listOcupationsReducer';
import listCertificationsNameReducer from './listCertificationsNameReducer';
import getListCareersReducer from './getListCareersReducer';
import updateChallengeReducer from './updateChallengeReducer';
import showNotificationReducer from './showNotificationReducer';

export default combineReducers({
    form: formReducer,
    user: userReducer,
    cleanFormReducer: cleanFormReducer,
    getIdProjectReducer: getIdProjectReducer,
    getIdStageReducer: getIdStageReducer,
    getListChallengesReducer: getListChallengesReducer,
    getTipIdReducer: getTipIdReducer,
    getCertificateReducer: getCertificateReducer,
    listCertificationsReducer: listCertificationsReducer,
    getEducationReducer: getEducationReducer,
    listEducationsReducer: listEducationsReducer,
    listSkillsReducer: listSkillsReducer,
    openModalReducer: openModalReducer,
    getAdStateReducer: getAdStateReducer,
    getTypeAdsReducer: getTypeAdsReducer,
    getAdIdReducer: getAdIdReducer,
    getListAdsReducer: getListAdsReducer,
    getAdvertReducer: getAdvertReducer,
    getReminderReducer: getReminderReducer,
    listUniversitiesReducer: listUniversitiesReducer,
    listCompaniesReducer: listCompaniesReducer,
    listRemindersReducer: listRemindersReducer,
    listUsersReducer: listUsersReducer,
    getExperienceReducer: getExperienceReducer,
    listExperiencesReducer: listExperiencesReducer,
    reloadPageReducer: reloadPageReducer,
    listMeetsReducer: listMeetsReducer,
    getMeetReducer: getMeetReducer,
    getEventTypeReducer: getEventTypeReducer,
    getChallengeReducer: getChallengeReducer,
    listChallengeReducer: listChallengeReducer,
    getEventReducer: getEventReducer,
    activeBackButtonReducer: activeBackButtonReducer,
    setImageReducer: setImageReducer,
    listOcupationsReducer: listOcupationsReducer,
    listCertificationsNameReducer: listCertificationsNameReducer,
    getListCareersReducer: getListCareersReducer,
    updateChallengeReducer: updateChallengeReducer,
    showNotificationReducer: showNotificationReducer
});