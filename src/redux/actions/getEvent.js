export const type = 'getEvent';

const getEvent = (event) => ({
    type,
    payload: event,
});

export default getEvent;