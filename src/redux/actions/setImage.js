export const type = 'setImage';

const setImage = (text) => ({
    type,
    payload: text,
});

export default setImage;