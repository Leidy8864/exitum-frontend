export const type = 'listUsers';

const listUsers = (text) => ({
    type,
    payload: text,
});

export default listUsers;