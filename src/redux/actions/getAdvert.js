export const type = 'getAdvert';

const getAdvert = (advert) => ({
    type,
    payload: advert,
});

export default getAdvert;