
import React from 'react';
import View from './Challenges-view';
import { challengeByStep, challengeByEmployee, listCategories } from '../../redux/actions';
import cleanForm from '../../redux/actions/clean-form';
import getTipId from '../../redux/actions/getTipId';
import getListChallenges from '../../redux/actions/getListChallenges';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getIdProject from '../../redux/actions/get-id-project';
import getIdActualStage from '../../redux/actions/get-id-actual-stage';

import $ from 'jquery';

const role = localStorage.getItem('role');
const user_id = localStorage.getItem('id');
class Challenges extends React.Component {

    state = {
        blockChallenge: []
    }

    componentDidUpdate(nextProps){
        const { step_id, startup_id } = this.props;
        if (nextProps.step_id !== step_id) {
            if (step_id) {
                const data = {
                    step_id,
                    startup_id,
                    user_id
                }                
                this.getChallenges(data);
                /*
                Función permite saber cuando se la ruta ha cambiado para resetar el valor del ID  de proyecto 
                y de fase,esto permite que cuando se vuelva a acceder a esta ruta se vuelvan a hacer 
                las llamadas para mostrar la información.
                */
                this.props.history.listen(() => {
                    this.props.getIdProject(0);
                    this.props.getIdActualStage(0);
                });
            }
        }
    }


    async getChallenges(data) {
        try {
            var response = null;
            if (role === "entrepreneur") {
                response = await challengeByStep(data);

            } else {
                response = await challengeByEmployee(data);
            }
            const listChallenges = response.challenges;

            console.log("LISTA CHALLENGES",listChallenges);
            
            if (listChallenges && listChallenges.length >= 1) {
                const challenges = listChallenges.map(x => ({
                    key: x.tip.id,
                    challenge_id: x.id,
                    tip_id: x.tip.id,
                    title: x.tip.tip,
                    description: x.tip.description,
                    files: x.tip.file_tips,
                    reply: x.reply,
                    uploaded_files: x.files,
                    status: x.status
                }));
                this.props.getListChallenges(challenges);

                this.setState({
                    blockChallenge: challenges
                });
            }
        } catch (error) {
            console.log("Error al traer challenges", error);
        }
    }
    handleClick = (id) => {
        $('#title').val('');
        $('#description').val('');
        this.props.cleanForm("1");
        this.props.getTipId(id);
    }

    render() {
        return (
            <View
                blockChallenge={this.state.blockChallenge}
                handleClick={this.handleClick}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    startup_id: state.getIdProjectReducer,
    step_id: state.getIdStageReducer,
});

const mapDispatchToProps = {
    challengeByStep,
    cleanForm,
    getTipId,
    getListChallenges,
    getIdProject,
    getIdActualStage
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Challenges)
)