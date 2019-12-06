export const type = 'getReminder';

const getReminder = (text) => ({
    type,
    payload: text,
});


export default getReminder;