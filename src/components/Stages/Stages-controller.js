
import React from 'react';
import View from './Stages-view';
import { actuallyStage } from '../../redux/actions'

class Stages extends React.Component {

    state = {
        
    }
    async componentDidMount() {
        try {
            const stage = await actuallyStage(1);
            console.log(stage)
        } catch (error) {
            console.log(error)
        }
    }

    render() {

        return (
            <View/>
        );
    }
}
export default Stages;
