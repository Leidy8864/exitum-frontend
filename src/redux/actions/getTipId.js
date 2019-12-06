export const type = 'getTipId';

const getTipId = (text) => ({
    type,
    payload: text,
});

export default getTipId; 