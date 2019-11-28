export const type = 'GET_EVENT_TYPE';

const getEventType = (text) => ({
    type,
    payload: text,
});

export default getEventType;