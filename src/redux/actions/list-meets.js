export const type = 'listMeets';

const listMeets = (text) => ({
    type,
    payload: text,
});

export default listMeets;