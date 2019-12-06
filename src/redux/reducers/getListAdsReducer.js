import { GET_LIST_ADS } from "../actions/types";

const defaultState = [
    {
        id : 1,
        title: "Desarrollo de aplicación móvil en Android",
        description: "Descripción del proyecto↵Descripción del proyecto↵Descripción del proyecto",
        skills : [],
        startup : {}
    }
];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case GET_LIST_ADS: {
            return payload;
        }
        default:
            return state;
    }
}

export default reducer;