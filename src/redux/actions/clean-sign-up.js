export const type = 'cleanSignUp';

const cleanSignUp = (text) => ({
    type,
    payload: text,
});

export default cleanSignUp;