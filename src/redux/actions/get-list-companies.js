export const type = 'listCompanies';

const listCompanies = (text) => ({
    type,
    payload: text,
});

export default listCompanies;