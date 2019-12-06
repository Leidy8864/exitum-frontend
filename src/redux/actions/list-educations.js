export const type = 'listEducations';

const listEducations = (text) => ({
    type,
    payload: text,
});

export default listEducations;