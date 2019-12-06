import { GET_LIST_CHALLENGES } from "./types";

const getListChallenges = (challenges) => ({
    type : GET_LIST_CHALLENGES,
    payload: challenges,
});

export default getListChallenges;