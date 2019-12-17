
import React from 'react';
import View from './Stages-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import getIdActualStage from '../../redux/actions/get-id-actual-stage';
import { actuallyStage, actuallyStageEmployee } from '../../redux/actions'

import getIdProject from '../../redux/actions/get-id-project';

const role = localStorage.getItem('role');
const user_id = localStorage.getItem('id');
class Stages extends React.Component {

    state = {
        listSteps: [
        ],
        selected: '',
        projectId: 0
    }
    componentDidMount(){
        if (role === "employee") {
            const data = {
                user_id
            }
            this.getListStages(data);
        }
    }
    //Función que detecta los cambios en el componente para modificar el state
    componentDidUpdate(nextProps) {
        const { projectId } = this.props;
        if (nextProps.projectId !== projectId) {
            if (projectId) {                
                const data = {
                    projectId,
                    user_id
                }
                this.getListStages(data);
            }
        }
    }
    async getListStages(data) {
        var listStages = null;
        try {
            if (role === "entrepreneur") {
                listStages = await actuallyStage(data.projectId);
            } else {
                listStages = await actuallyStageEmployee(data.user_id);
            }            
            const steps = listStages ? listStages.steps : [];
            if (steps.length >= 1) {
                this.props.getIdActualStage(steps[0].id);
                this.setState({
                    listSteps: steps
                });
            }
        } catch (error) {
            console.log("Error al listar Stages", error)
        }
    }

    selectStage = async (e) => {
        this.props.getIdActualStage(e.target.id);
        console.log(e.target.id)
        this.setState({ selected: e.target.id });
    }

    render() {

        const {
            listSteps
        } = this.state

        return (
            <View
                listSteps={listSteps}
                selectStage={this.selectStage}
                role={role}
            />

        );
    }
}

const mapStateToProps = (state) => ({
    projectId: state.getIdProjectReducer,
});

const mapDispatchToProps = {
    getIdActualStage,
    getIdProject
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Stages)
)