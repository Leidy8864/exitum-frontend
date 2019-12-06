export const type = 'getExperience';

const getExperience = (text) => ({
    type,
    payload: text,
});

export default getExperience;