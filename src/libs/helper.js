import jwt from 'jsonwebtoken';


export const decodeToken = () => {
    const token = localStorage.getItem('token')
    const result = jwt.decode(token);
    console.log("result",result);
    
    return result;    
}

