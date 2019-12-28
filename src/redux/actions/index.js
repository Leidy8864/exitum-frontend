import axios from 'axios'
// import { AUTH_ERROR, UPDATE_USER, UPDATE_USER_ERROR } from './types'
import { AUTH_ERROR } from './types'
// export const root = 'http://localhost:8081/';

export const root = 'http://35.175.241.103:8081/';

export const oauthGoogle = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + 'users/oauth/google', data);
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

export const oauthFacebook = data => {
    return async dispatch => {
        try {
            const newData = {
                access_token: data,
                method: "facebook"
            }
            const res = await axios.post(root + 'users/oauth/facebook', newData);

            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

export const signUp = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + 'users/signUp', data)
            return res.data;
        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email is already use'
            })
        }
    }
}

export const signIn = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + 'users/signIn', data)
            return res.data;
        } catch (err) {
            console.log(err)
        }
    }
}

export const updateUser = async data => {
    try {
        const res = await axios.post(root + 'users/update', data);
        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const updateUserPerfil = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + 'users/update', data);
            return res.data;
        } catch (error) {
            console.log("Error" + error);
        }
    }
}

export const showDataByUser = async (id) => {
    try {
        const res = await axios.get(root + `users/show/${id}`);
        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const forgotPassword = async (data) => {
    try {
        const res = await axios.post(root + 'users/forgot', data);
        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const verifyToken = async (token) => {
    try {
        const res = await axios.get(root + 'users/verificationToken/' + token);
        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const resetPassword = async (data) => {
    try {
        const res = await axios.post(root + 'users/reset', data);
        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const authToken = async (data) => {
    try {
        const res = await axios.get(root + 'users/authentication/' + data)
        return res.data;
    } catch (err) {
        console.log("Error" + err);
    }
}



//Proyectos o Startups

export const listStartupsByUser = async (data) => {
    try {
        const res = await axios.post(root + 'startups/listById', data);
        return res.data.startups;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const createStartup = async (data) => {
    try {
        const res = await axios.post(root + 'startups/create', data);
        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const listCategories = async () => {
    try {
        const res = await axios.get(root + 'categories/list');
        return res.data.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const listStages = async () => {
    try {
        const res = await axios.get(root + 'stages/list');
        return res.data.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

//Advertisiments
export const createAdvertisement = async (data) => {
    try {
        console.log(data)
        const res = await axios.post(root + 'ads/create', data);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
}


export const updateAdvertisement = async (data) => {
    try {
        const res = await axios.post(root + 'ads/update', data);
        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
}
export const updatAdvertState = async (data) => {
    try {
        const res = await axios.post(root + 'ads/updateState', data);
        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
}
export const listAdsByUser = async (data) => {
    try {
        const res = await axios.get(root + 'ads/listByEntrepreneur', {
            params: data
        });
        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}
export const listAdsBySkills = async (data) => {
    try {
        const res = await axios.get(root + 'ads/listBySkill', {
            params: data
        });
        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}
export const getAdDetail = async (adId) => {
    try {
        const res = await axios.get(root + `ads/${adId}/detail`);
        return res.data.data;
    } catch (error) {
        console.log("Error" + error);
    }
}
export const listPostulations = async (data) => {
    try {
        const res = await axios.get(root + 'ads/listByProposal', {
            params: data
        });
        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}
//End advertisments

//Proposals and Postulations
export const listProposalByAdvert = async (data) => {
    try {
        const res = await axios.get(root + 'proposals/byAdvertisement',
            {
                params: data
            }
        );
        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
}

export const createProposal = async (data) => {
    try {
        const res = await axios.post(root + 'proposals/create', data);
        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
}
export const listRecommendationByAdvert = async (data) => {
    try {
        const res = await axios.get(root + 'ads/recomendations',
            {
                params: data
            }
        );
        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
}
export const addFavoriteEmployee = async (data) => {
    try {
        const res = await axios.post(root + 'ads/invitation', data);
        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
}
export const listEmployeesFavorites = async (data) => {
    try {
        const res = await axios.get(root + 'ads/favorites', {
            params: data
        });
        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
}
//End Proposal and Recomendations 


export const listSkillsAxio = async () => {
    try {
        const res = await axios.get(root + 'skills/list');
        return res.data.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const deleteSkill = async (data) => {
    try {
        const res = await axios.post(root + 'skills/delete', data);
        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
}

export const listAreas = async () => {
    try {
        const res = await axios.get(root + 'areas/list');
        return res.data.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const actuallyStage = async (id) => {
    try {
        const res = await axios.get(root + `challenges/listStage/${id}`);
        return res.data.data;
    } catch (error) {
        console.log("Error" + error)
    }
}

export const actuallyStageEmployee = async (id) => {
    try {
        const res = await axios.get(root + `challenges/listStageEmp/${id}`);
        return res.data.data;
    } catch (error) {
        console.log("Error" + error)
    }
}

export const challengeByStep = async (data) => {
    try {
        const res = await axios.get(root + `challenges/listStep`, {
            params: data
        })
        return res.data.data;
    } catch (error) {
        console.log("Error" + error)
    }
}
export const challengeByEmployee = async (data) => {
    try {
        const res = await axios.get(root + `challenges/listStepEmp`, {
            params: data
        })
        return res.data.data;
    } catch (error) {
        console.log("Error" + error)
    }
}

export const datailChallenge = async (id) => {
    try {
        const res = await axios.get(root + `steps/show/${id}`)
        return res.data.data;
    } catch (error) {
        console.log("Error" + error)
    }
}


export const completeChallenge = async (data) => {
    try {
        const res = await axios.post(root + `challenges/reply/`, data)
        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}

export const getSummaryChallenge = async (data) => {
    try {
        const res = await axios.get(root + `challenges/summaryTips/`, {
            params: data
        })
        return res.data.data;
    } catch (error) {
        console.log("Error" + error)
    }
}




export const deleteFileReplyy = async (data) => {
    try {
        const res = await axios.post(root + `challenges/deleteFileReply/`, data)
        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}


export const createExperience = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `experiences/create`, data)
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const updateExperience = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `experiences/update`, data)
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const getOneExperience = async (id) => {
    try {
        const res = await axios.get(root + `experiences/show/${id}`)
        return res.data.data
    } catch (error) {
        console.log("Error" + error)
    }
}

export const createEducation = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `educations/create`, data
            )
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const createEducationUpdate = data => {
    return async dispatch => {
        try {
            const res = await axios.post(
                root + `educations/update`, data
            )
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const createCertification = data => {
    return async dispatch => {
        try {
            const res = await axios.post(
                root + `certifications/create`, data,
                {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;'
                    }
                }
            )
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const deleteCertificate = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `certifications/delete`, data)
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const createCertificationUpdate = data => {
    return async dispatch => {
        try {
            const res = await axios.post(
                root + `certifications/update`, data,
                {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;'
                    }
                }
            )
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const createSkills = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `skills/userAddSkill`, data
            )
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const showExperienceByUser = async (id) => {
    try {
        const res = await axios.get(root + `experiences/list-by-id/${id}`);
        return res.data.data
    } catch (error) {
        console.log('Error' + error)
    }
}

export const showEducationByUser = async (id) => {
    try {
        const res = await axios.get(root + `educations/list-by-id/${id}`);
        return res.data.data
    } catch (error) {
        console.log('Error' + error)
    }
}

export const showSchedulesByUser = (id, body) => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `schedules/create/${id}`, body)
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const deleteEducation = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `educations/delete`, data)
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const showCertificationByUser = async (id) => {
    try {
        const res = await axios.get(root + `certifications/list-by-id/${id}`)
        return res.data.data
    } catch (error) {
        console.log("Error" + error)
    }
}

export const showSkillByUser = async (id) => {
    try {
        const res = await axios.get(root + `skills/list-by-id/${id}`)
        return res.data.data
    } catch (error) {
        console.log("Error" + error)
    }
}

export const updateImageUser = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `users/update-image`, data,
                {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;'
                    }
                }
            )
            return res.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}


export const notAvailableUser = (id, data) => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `schedules/not-available-multiple/${id}`, data)
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const appointmentsUser = (id, data) => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `appointments/create/${id}`, data)
            return res.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const appointmentsByUser = async id => {
    try {
        const res = await axios.get(root + `appointments/list-by-reminder/${id}`)
        return res.data
    } catch (error) {
        console.log("Error" + error)
    }
}

export const meetingByUser = async id => {
    try {
        const res = await axios.get(root + `appointments/list-by-meeting/${id}`)
        return res.data.data
    } catch (error) {
        console.log("Error" + error)
    }
}

export const appointmentsUpdate = (id, data) => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `appointments/update/${id}`, data)
            return res.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const appointmentsDelete = (id, data) => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `appointments/cancel/${id}`, data)
            return res.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const appointmentsConfirm = (id, data) => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `appointments/confirmation/${id}`, data)
            return res.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const listUniversities = async (id) => {
    try {
        const res = await axios.get(root + `universities/all`)
        return res.data.data;
    } catch (error) {
        console.log("Error" + error)
    }
}

export const listCompanies = async (id) => {
    try {
        const res = await axios.get(root + `companies/all`)
        return res.data.data;
    } catch (error) {
        console.log("Error" + error)
    }
}

export const listUsers = async (id) => {
    try {
        const res = await axios.get(root + `users/all-user/${id}`)
        return res.data.data;
    } catch (error) {
        console.log("Error" + error)
    }
}

export const deleteExperience = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `experiences/delete`, data)
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const hourAvailables = (id, data) => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `schedules/schedule/${id}`, data)
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}



//Events 

export const listEvents = async (data) => {
    try {
        const res = await axios.get(root + `events/list-all/`, {
            params: data
        })
        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}
export const listMyEvents = async (id, data) => {
    try {
        const res = await axios.get(root + `events/list-by-user/${id}`, {
            params: data
        });
        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}
export const listEventsAssist = async (id, data) => {
    try {
        const res = await axios.get(root + `events/participating/${id}`, {
            params: data
        });
        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}



export const deleteEvent = async (id) => {
    try {
        const res = await axios.post(root + `events/delete/${id}`)
        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}
export const assistEvent = async (data) => {
    try {
        const res = await axios.post(root + `events/take-part/`, data)
        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}
export const showEvent = async (id) => {
    try {
        const res = await axios.get(root + `events/show/${id}`)
        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}

export const createEvent = async (data) => {
    try {
        const res = await axios.post(root + `events/create/`, data,
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;'
                }
            }
        )
        console.log("res.data =", res.data)
        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}

export const editEvent = async (data) => {
    try {
        const res = await axios.post(root + `events/update/`, data,
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;'
                }
            }
        )
        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}
export const getListParticipants = async (id, data) => {
    try {
        const res = await axios.get(root + `events/participating-event/${id}`, {
            params: data
        })
        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}
//End Events

export const validadeTip = (data) => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `advices/check`, data);
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const searchTip = async (id, type) => {
    try {
        const res = await axios.get(root + `advices/show?user_id=${id}&type=${type}`)
        return res.data
    } catch (error) {
        console.log("Error" + error)
    }
}

export const verifyChallenge = (data) => {
    return async dispatch => {
        try {
            console.log("DATA",data)
            const res = await axios.post(root + `challenges/verify`, data)
            console.log("Leydi bbaby",res.data)
            return res.data.data
            
        } catch (error) {
            console.log("Error" + error)
        }
    }
}
export const listChallengeToVerify = async (id, page) => {
    try {
        const res = await axios.get(root + `challenges/toVerify?user_id=${id}&page=${page}`);
        return res.data.data
    } catch (error) {
        console.log("Error" + error)
    }
}

export const ocupationsList = async () => {
    try {
        const res = await axios.get(root + `occupations/list`);
        return res.data.data
    } catch (error) {
        console.log("Error" + error)
    }
}

export const certificationsList = async () => {
    try {
        const res = await axios.get(root + `certification-name/list`);
        return res.data.data
    } catch (error) {
        console.log("Error" + error)
    }
}

export const careersList = async () => {
    try {
        const res = await axios.get(root + `careers/list`);
        return res.data.data
    } catch (error) {
        console.log("Error" + error)
    }
}

export const listCountries = async () => {
    try {
        const res = await axios.get(root + `users/countries`);
        return res.data.data
    } catch (error) {
        console.log("Error" + error)
    }
}


export const listCitiesByCountry = async (id) => {
    try {
        const res = await axios.get(root + `users/cityByCountry`,{params : {
            country_id : id
        }});
        return res.data.data
    } catch (error) {
        console.log("Error" + error)
    }
}

export const challengeNotification = async (id) => {
    try {
        const res = await axios.get(root + `challenges/showAlert`,{
            params : {
                user_id : id
            }
        });
        return res.data
    } catch (error) {
        console.log("Error" + error)
    }
}




