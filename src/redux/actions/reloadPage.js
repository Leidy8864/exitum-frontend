export const type = 'RELOAD_PAGE';

const reloadPage = (text) => ({
    type,
    payload: text,
});

export default reloadPage;