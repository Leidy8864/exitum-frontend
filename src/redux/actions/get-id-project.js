export const type = 'getIdProject';

const getIdProject = (text) => ({
    type,
    payload: text,
});

export default getIdProject;