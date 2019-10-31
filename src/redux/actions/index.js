import axios from 'axios'
// import { AUTH_ERROR, UPDATE_USER, UPDATE_USER_ERROR } from './types'
import { AUTH_ERROR } from './types'

// const root = 'http://127.0.0.1:8081/';

export const root = 'http://35.175.241.103:8081/';

export const oauthGoogle = data => {
    return async dispatch => {
        try {
            console.log('we received', data);
            const newData = {
                access_token: data,
                method: "google"
            }
            const res = await axios.post(root + 'users/oauth/google', newData);
            console.log(res.data);

            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

export const oauthFacebook = data => {
    return async dispatch => {

        try {
            console.log('we received', data);
            const newData = {
                access_token: data,
                method: "facebook"
            }
            const res = await axios.post(root + 'users/oauth/facebook', newData);
            console.log(res.data);

            return res.data
        } catch (error) {
            console.log(error)
        }

    }
}

export const signUp = data => {
    return async dispatch => {
        try {
            console.log('go to AUTH_SIGN_UP in action');
            const res = await axios.post(root + 'users/signUp', data)
            console.log("res.data = ", res.data);
            // console.log('go to AUTH_SIGN_UP dispatched in action');
            // dispatch({
            //     type: AUTH_SIGN_UP,
            //     payload: res.data.accessData.accessToken
            // })

            // localStorage.setItem('token',res.data.accessData.accessToken)
            console.log(res);
            return res.data;
        } catch (err) {
            // console.log(err)
            // console.log('go to AUTH_ERROR dispatched in action');
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
            console.log(res)
            return res.data;
        } catch (err) {
            console.log(err)
        }
    }
}

export const updateUser = async (data) => {
    console.log("DATA", data);
    try {
        const res = await axios.post(root + 'users/update', data);
        console.log(res)
        return res.data;
    } catch (error) {
        console.log("Error" + error);

    }

}

export const forgotPassword = async (data) => {
    console.log("Data reviced", data);

    try {
        const res = await axios.post(root + 'users/forgot', data);
        console.log("RESPONSA API", res.data);

        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const verifyToken = async (token) => {
    console.log("Data reviced", token);

    try {
        const res = await axios.get(root + 'users/verificationToken/' + token);
        console.log("RESPONSA API", res.data);

        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const resetPassword = async (data) => {
    console.log("Data reviced", data);

    try {
        const res = await axios.post(root + 'users/reset', data);
        console.log("RESPONSA API", res.data);

        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const authToken = async (data) => {
    try {
        const res = await axios.get(root + 'users/authentication/' + data)
        // console.log(res)
        return res.data;
    } catch (err) {
        console.log("Error" + err);
    }
}



//Proyectos o Startups

export const listStartupsByUser = async (data) => {

    try {
        const res = await axios.post(root + 'startups/listById', data);
        console.log("LISTADO DE STARTUPS", res.data.startups);
        return res.data.startups;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const createStartup = async (data) => {
    try {
        const res = await axios.post(root + 'startups/create', data);

        console.log("RES DATA", res.data);

        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const listCategories = async () => {

    try {
        const res = await axios.get(root + 'categories/list');
        console.log(res.data.data);
        return res.data.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const listStages = async () => {

    try {
        const res = await axios.get(root + 'stages/list');
        console.log(res.data.data);
        return res.data.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

//Advertisiments
export const createAdvertisement = async (data) => {
    console.log("Data reviced", data);

    try {
        const res = await axios.post(root + 'ads/create', data);

        console.log("RES DATA", res.data);

        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
}


export const updateAdvertisement = async (data) => {
    try {
        const res = await axios.post(root + 'ads/update', data);

        console.log("RES DATA", res.data);

        return res.data;
    } catch (error) {
        console.log("Error", error);
    }
}

export const listSkills = async () => {

    try {
        const res = await axios.get(root + 'skills/list');
        console.log(res.data.data);
        return res.data.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const listAreas = async () => {

    try {
        const res = await axios.get(root + 'areas/list');
        console.log("DATA LISTADO", res.data.data);
        return res.data.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const listAdsByUser = async (data) => {

    try {
        const res = await axios.get(root + 'ads/listByEntrepreneur', {
            params: data
        });
        console.log("DATA LISTADO", res.data);
        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

// export const fetchAlbums = (id) => async dispatch => {
//     dispatch({ type: "FETCH_ALBUMS_BY_ARTIST"});

//     //'43ZHCT0cAZBISjO8DG9PnE'
//     spotifyApi.getArtistAlbums(id)
//       .then((response) => {
//         dispatch({ type: "FETCH_ALBUMS_BY_ARTIST_FULFILLED", payload: response})
//       })
//       .catch((err) => {
//         dispatch({ type: "FETCH_ALBUMS_BY_ARTIST_REJECTED", payload: err})
//       });
//   }

export const actuallyStage = async (id) => {
    console.log("id llegado", id);

    try {
        const res = await axios.get(root + `challenges/listStage/${id}`);


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
        // console.log("DATA ETAPA POR ID", res.data.data)
        return res.data.data;
    } catch (error) {
        console.log("Error" + error)
    }
}

export const datailChallenge = async (id) => {

    try {
        const res = await axios.get(root + `steps/show/${id}`)
        // console.log("DATA ETAPA POR ID", res.data.data)
        return res.data.data;
    } catch (error) {
        console.log("Error" + error)
    }
}


export const completeChallenge = async (data) => {

    try {
        const res = await axios.post(root + `challenges/reply/`, data)
        // console.log("DATA ETAPA POR ID", res.data.data)

        console.log("RESPONSE", res.data);

        return res.data;
    } catch (error) {
        console.log("Error" + error)
    }
}


export const createExperience =  data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `experiences/create`, data)
            console.log('RES DATA', res);
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const createEducation =  data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `educations/create`, data
        )
            console.log('RES DATA', res);
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const createCertification =  data => {
    return async dispatch => {
        try {
            const res = await axios.post(
                root + `certifications/create`,data,
                { 
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;'
                    } 
                }
            )
            console.log('RES DATA',res);
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const createCertificationUpdate =  data => {
    return async dispatch => {
        try {
            const res = await axios.post(
                root + `certifications/update`,data,
                { 
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;'
                    } 
                }
            )
            console.log('RES DATA',res);
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const createSkills = data => {
    return async dispatch => {
        try {
            const res = await axios.post(root + `skills/create`, data
        )
            console.log('RES DATA', res);
            return res.data.data
        } catch (error) {
            console.log("Error" + error)
        }
    }
}

export const showExperienceByUser = async (id) => {
    try {
        const res = await axios.get(root + `experiences/list-by-id/${id}`);
        console.log('EXPERIENCES BY ID',res);
        return res.data.data
    } catch (error) {
        console.log('Error' + error)
    }
}

export const showEducationByUser = async (id) => {
    try {
        const res = await axios.get(root + `educations/list-by-id/${id}`);
        console.log('EDUCATION BY ID',res);
        return res.data.data
    } catch (error) {
        console.log('Error' + error)
    }
}

export const showCertificationByUser = async (id) => {
    try {
        const res = await axios.get(root + `certifications/list-by-id/${id}`)
        console.log('CERTIFICATIONS BY ID', res);
        return res.data.data
    } catch (error) {
        console.log("Error" + error)
    }
}