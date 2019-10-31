export const type = 'listSkills';

const listSkills = (text) => ({
    type,
    payload: text,
});

export default listSkills;