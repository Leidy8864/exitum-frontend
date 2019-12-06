export const type = 'getAdId';

const getAdId = (id) => ({
    type,
    payload: id,
});

export default getAdId;