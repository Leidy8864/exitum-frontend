export const type = 'listOcupations';

const listOcupations = (text) => ({
    type,
    payload: text,
});

export default listOcupations;