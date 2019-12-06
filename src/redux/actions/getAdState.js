export const type = 'GET_AD_STATE';

const openModal = (text) => ({
    type,
    payload: text,
});

export default openModal;