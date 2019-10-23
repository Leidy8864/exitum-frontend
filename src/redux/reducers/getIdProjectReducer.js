import { type as getIdProject } from '../actions/get-id-project';
import axios from 'axios';

const root = 'http://35.175.241.103:8081/';

const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case getIdProject: {
            // fetch(`http://35.175.241.103:8081/challenges/actualStage/${payload}`
            //     // ,{
            //     //     headers:{
            //     //     'x-access-token': localStorage.getItem("token")
            //     //     }
            //     // }
            // )
            // .then(function(response) {
            //     console.log(response.json())
            //     return response.json();
            // })
            // .catch(function(error) {
            //     console.log('Request failed', error);
            // });
            axios.get(`http://35.175.241.103:8081/challenges/actualStage/${payload}`)
            // .then(function (response) {
            //     // handle success
            //     console.log(response.data.data);
            //     return response.data.data;
            // })
            .then(response => response)
            .then(data => {
                // stopLoadingAnimation();
                // return data.stargazers_count;
                return data.data.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        }

        default:
            return 0;
    }
}

export default reducer;