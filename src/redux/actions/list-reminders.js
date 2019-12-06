export const type = 'listReminders';

const listReminders = (text) => ({
    type,
    payload: text,
});

export default listReminders;