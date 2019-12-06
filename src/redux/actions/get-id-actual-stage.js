export const type = 'getIdActualStage';

const getIdActualStage = (text) => ({
    type,
    payload: text,
});

export default getIdActualStage; 