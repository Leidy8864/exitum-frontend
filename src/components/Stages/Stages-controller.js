
import React from 'react';
import View from './Stages-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import getIdActualStage from '../../redux/actions/get-id-actual-stage';
import { actuallyStage } from '../../redux/actions'

class Stages extends React.Component {

    state = {
        listStages: [],
        selected: ''
    }

    //Función que detecta los cambios en el componente para modificar el state
    async componentDidUpdate(nextProps){
        const {projectId} = this.props;
        if (nextProps.projectId !== projectId) {           
            if (projectId) {
                try {
                    const listStages = await actuallyStage(projectId);
                    if (listStages) {
                        this.props.getIdActualStage(listStages.step[0].id_step);
                        console.log("STAGES",listStages);
                    }
                    this.setState({
                        listStages : listStages.step
                    });
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
                listStages: listaStages.step
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    selectStage = async (e) => {
        console.log("EVENT ID",e.target.id);
        
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

const mapStateToProps = (state) => ({    
    projectId: state.getIdProjectReducer,
});

const mapDispatchToProps = {
    getIdActualStage
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Stages)
)