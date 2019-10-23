
import React from 'react';
import View from './Stages-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import getIdActualStage from '../../redux/actions/get-id-project';
import { actuallyStage } from '../../redux/actions'
import { isPast } from 'date-fns';

class Stages extends React.Component {

    state = {
        listStages: [],
        selected: '',
    }

    async componentDidMount() {
        try {
            console.log("idProject = ",localStorage.getItem('idProject'));
            const listaStages = await actuallyStage(localStorage.getItem('idProject'));
            this.setState({
                listStages: listaStages.step
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    async lstStage() {
        console.log("lstStage = ", this.props.getIdProjectReducer)
        try {
            const listaStages = await actuallyStage(this.props.getIdProjectReducer);
            this.setState({
                listStages: listaStages.step
            })
            
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
            getIdProjectReducer
        } = this.props;

        console.log("getIdProjectReducer = ", getIdProjectReducer);

        const {
            listStages
        } = this.state

        return (
            <View
                listStages = {listStages}
                lstStage = {this.lstStage}
                getIdProjectReducer = {getIdProjectReducer}
                // this.lstStage(getIdProjectReducer);
                selectStage = {this.selectStage}
            />
        );
    }
}

const mapStateToProps = state => ({
    getIdProjectReducer: state.getIdProjectReducer
});

const mapDispatchToProps = {
    getIdActualStage
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Stages)
)