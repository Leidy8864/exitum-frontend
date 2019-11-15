export const type = 'listUniversities';

const listUniversities = (text) => ({
    type,
    payload: text,
});

export default listUniversities;