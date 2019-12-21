export const type = 'updateChallenge';

const updateChallenge = (text) => ({
    type,
    payload: text,
});

export default updateChallenge;