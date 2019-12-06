export const type = 'cleanForm';

const cleanForm = (text) => ({
    type,
    payload: text,
});

export default cleanForm;