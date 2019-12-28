import jwt from 'jsonwebtoken';

import $ from 'jquery';

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
