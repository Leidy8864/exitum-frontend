export const type = 'GET_TYPE_ADS';

const getTypeAds = (text) => ({
    type,
    payload: text,
});

export default getTypeAds;