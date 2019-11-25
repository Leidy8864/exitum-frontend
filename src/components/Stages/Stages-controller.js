
import React from 'react';
import View from './Stages-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import getIdActualStage from '../../redux/actions/get-id-actual-stage';
import { actuallyStage, actuallyStageEmployee } from '../../redux/actions'


const role = localStorage.getItem('role');

class Stages extends React.Component {

    state = {
        listSteps: [
        ],
        selected: '',
        projectId : 0
    }

    async componentDidMount() {
        var listStages = null;

        try {
            if (role === "employee") {
                const user_id = localStorage.getItem('id');
                listStages = await actuallyStageEmployee(user_id);
    
                console.log("lista stages in did mount", listStages);
    
            }else{
                const projectId = localStorage.getItem('idProject');
                if (projectId) {
                    listStages = await actuallyStage(projectId);
                }
            }
            const steps = listStages.steps;
            if (steps.length >= 1) {
                localStorage.setItem('level_id',steps[0].id)
                this.props.getIdActualStage(steps[0].id);
                this.setState({
                    listSteps: steps
                });
            }   
        } catch (error) {
            console.log("ERROR",error);
            
        }
    }

    //Función que detecta los cambios en el componente para modificar el state
    async componentDidUpdate(nextProps) {
        const { projectId } = this.props;
        if (nextProps.projectId !== projectId) {
            if (projectId) {
                try {
                    var listStages = null;
                    if (role === "entrepreneur") {
                        listStages = await actuallyStage(projectId);
                        const steps = listStages.steps;
                        if (steps.length >= 1) {
                            this.props.getIdActualStage(steps[0].id);
                            this.setState({
                                listSteps: steps
                            });
                        }
                    }

                } catch (error) {
                    console.log("Error al listar Stages");
                }
            }
        }
    }
    async lstStage() {
        try {
            const listaStages = await actuallyStage(this.props.getIdProjectReducer);
            this.setState({
                listSteps: listaStages.step
            })

        } catch (error) {
            console.log(error)
        }
    }

    selectStage = async (e) => {

        this.props.getIdActualStage(e.target.id);

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
    getIdActualStage
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Stages)
)