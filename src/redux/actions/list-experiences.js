export const type = 'listExperiences';

const listExperiences = (text) => ({
    type,
    payload: text,
});

export default listExperiences;