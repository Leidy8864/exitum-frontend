export const type = 'getEducation';

const getEducation = (text) => ({
    type,
    payload: text,
});

export default getEducation;