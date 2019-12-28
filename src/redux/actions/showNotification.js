export const type = 'showNotification';

const showNotification = (text) => ({
    type,
    payload: text,
});

export default showNotification;