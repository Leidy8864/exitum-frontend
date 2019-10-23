
import React from 'react';
import View from './Stages-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import getIdActualStage from '../../redux/actions/get-id-project';
import { actuallyStage } from '../../redux/actions'

class Stages extends React.Component {

    state = {
        listStages: [],
        selected: '',
    }

    async componentDidMount() {
        try {
            const listaStages = await actuallyStage();
            this.setState({
                listStages: listaStages.step
            })

            console.log('STAGES',listaStages.step);
            
        } catch (error) {
            console.log(error)
        }
    }

    selectStage = async (e) => {
        this.props.getIdActualStage(e.target.id);
        this.setState({selected: e.target.id}); 
    }

    render() {

        const {
            listStages
        } = this.state

        return (
            <View
                listStages = {listStages}
                selectStage = {this.selectStage}
            />
        );
    }
}

const mapDispatchToProps = {
    getIdActualStage
};

export default withRouter(
    connect(null, mapDispatchToProps)(Stages)
)