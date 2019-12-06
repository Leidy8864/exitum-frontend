import { GET_LIST_ADS } from "./types";

const getListAds = (ads) => ({
    type : GET_LIST_ADS,
    payload: ads,
});

export default getListAds;