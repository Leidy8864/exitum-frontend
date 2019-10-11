import axios from 'axios'
// import { AUTH_ERROR, UPDATE_USER, UPDATE_USER_ERROR } from './types'
import { AUTH_ERROR } from './types'

// const root = 'http://127.0.0.1:8081/';

const root = 'http://35.175.241.103:8081/';

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
    console.log("Data reviced",data);

    try {
        const res = await axios.post(root + 'users/forgot', data);
        console.log("RESPONSA API",res.data);

        return res.data;
    } catch (error) {
        console.log("Error" + error);
    }
}

export const resetPassword = async(data) =>{
    console.log("Data reviced",data);

    try {
        const res = await axios.get(root + 'users/reset', data);
        console.log("RESPONSA API",res.data);

        return res.data;
    } catch (error) {
        console.log("Error" + error);
    } 
}