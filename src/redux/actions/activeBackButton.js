export const type = 'activeBackButton';

const activeBackButton = (text) => ({
    type,
    payload: text,
});

export default activeBackButton;