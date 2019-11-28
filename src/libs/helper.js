import jwt from 'jsonwebtoken';

import $ from 'jquery';

export const decodeToken = () => {
    const token = localStorage.getItem('token')
    const result = jwt.decode(token);    
    return result;    
}