export const type = 'listCertifications';

const listCertifications = (text) => ({
    type,
    payload: text,
});

export default listCertifications;