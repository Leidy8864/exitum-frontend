import jwt from 'jsonwebtoken';
import moment from 'moment';
import { updateUser } from '../redux/actions';
const token = localStorage.getItem('token');
export const decodeToken = () => {
    const token = localStorage.getItem('token')
    const result = jwt.decode(token);
    return result;
}

export const convertTimes = (time) => {
    var regHrs = /^(\d+)/g;
    var regMnts = /:(\d+)/g;
    var hrs = Number(regHrs.exec(time)[1]);
    var mnts = Number(regMnts.exec(time)[1]);

    if (hrs > 24 || hrs < 0 || mnts > 59 || mnts < 0) throw ("Opps! formato de hora incorrecto.");
    if (mnts < 10) mnts = `0${mnts}`

    if (hrs > 0 && hrs < 12) time = `${hrs}:${mnts} AM`
    if (hrs > 12 && hrs < 24) time = `${hrs - 12}:${mnts} PM`
    if (hrs == 0) time = `12:${mnts} AM`
    if (hrs == 12) time = `12:${mnts} PM`

    return time
}

export const isLogged = () => {
    if (token) {
        return true;
    } else {
        return false
    }
}
export const isTokenExpired = () => {
    const result = decodeToken();
    try {
        if (isLogged && result.exp < Math.floor(Date.now() / 1000)) {
            localStorage.clear();
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return true;
    }
}

export const updateLastLogin = async () => {
    console.log("is udpateing");
    
    const data = {
        user_id : localStorage.getItem('id')
    }
    await updateUser(data);
}