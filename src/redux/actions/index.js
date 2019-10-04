import axios from 'axios'
import { AUTH_SIGN_UP, AUTH_ERROR } from './types'

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
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

export const oauthFacebook = data => {
    return async dispatch => {
        console.log('we received', data);
        const newData = {
            access_token: data,
            method: "facebook"
        }
        const res = await axios.post(root + 'users/oauth/facebook', newData);
        console.log(res);
        // dispatch({
        //     type: AUTH_SIGN_UP,
        //     payload: res.data.accessData.accessToken
        // })

        // localStorage.setItem('JWT_TOKEN',res.data.accessData.accessToken)
        return res.data
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