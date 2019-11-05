export const type = 'GET_TYPE_ADS';

const openModal = (text) => ({
    type,
    payload: text,
});

export default openModal;