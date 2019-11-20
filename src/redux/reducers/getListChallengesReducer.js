import { GET_LIST_CHALLENGES } from "../actions/types";

const defaultState = [
    {
        key : 1,
        tip_id : 1,
        challengeId  : 1,
        title : "Realizar el model Business Canvas",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor id est quis gravida. Phasellus molestie feugiat aliquam. Vivamus semper elit nec nunc cursus pulvinar. Vestibulum quis pretium ipsum. Duis in purus at erat molestie fermentum non non turpis.",
        files : []
    }
];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case GET_LIST_CHALLENGES: {
            return payload;
        }
        default:
            return state;
    }
}

export default reducer;