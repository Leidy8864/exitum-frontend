export const type = 'listCareers';

const listCareers = (text) => ({
    type,
    payload: text,
});

export default listCareers;