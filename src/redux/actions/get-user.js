export const type = 'getUser';

const getUser = (text) => ({
    type,
    payload: text,
});

export default getUser;