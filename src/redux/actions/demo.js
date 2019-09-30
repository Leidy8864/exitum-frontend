export const type = 'demo';

const demo = (text) => ({
    type,
    payload: text,
});

export default demo;