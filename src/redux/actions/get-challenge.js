export const type = 'getChallenge';

const getChallenge = (text) => ({
    type,
    payload: text,
});


export default getChallenge;