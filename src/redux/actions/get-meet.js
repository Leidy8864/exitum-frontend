export const type = 'getMeet';

const getMeet = (meet) => ({
    type,
    payload: meet,
});


export default getMeet;