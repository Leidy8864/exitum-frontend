export const type = 'getIdChallenge';

const getIdChallenge = (text) => ({
    type,
    payload: text,
});

export default getIdChallenge; 