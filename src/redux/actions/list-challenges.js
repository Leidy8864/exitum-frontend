export const type = 'listChallenges';

const listChallenges = (text) => ({
    type,
    payload: text,
});

export default listChallenges;