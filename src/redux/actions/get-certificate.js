export const type = 'getCertificate';

const getCertificate = (text) => ({
    type,
    payload: text,
});

export default getCertificate;