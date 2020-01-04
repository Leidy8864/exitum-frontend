
import React from 'react';
import View from './Challenges-view';
import { challengeByStep, challengeByEmployee, listCategories, viewedChallenge } from '../../redux/actions';
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
        blockChallenge: [{

        }
        ],
        mostrarImagen: false,
        project: ''
    }

    // componentDidMount() {
    //     const { step_id, project } = this.props;                
    //     const data = {
    //         step_id: step_id ? step_id : 0,
    //         startup_id: project.id ? project.id : 0,
    //         user_id
    //     }
    //     this.getChallenges(data);
    //     this.setState({
    //         project: project
    //     });
    // }

    componentDidUpdate(nextProps) {
        const { step_id, project } = this.props;
        if (nextProps.step_id !== step_id || nextProps.project !== project) {
            if (step_id || project) {
                const data = {
                    step_id,
                    startup_id: project.id,
                    user_id
                }
                this.getChallenges(data);
                this.setState({
                    project: project
                });
                /*
                Función permite saber cuando se la ruta ha cambiado para resetar el valor del ID  de proyecto 
                y de fase,esto permite que cuando se vuelva a acceder a esta ruta se vuelvan a hacer 
                las llamadas para mostrar la información.
                */
                this.props.history.listen(() => {
                    this.props.getIdProject('');
                    this.props.getIdActualStage(0);
                });
            }
        }
    }


    async getChallenges(data) {
        // console.log("KKKK");
        
        try {
            var response = null;
            if (role === "entrepreneur") {
                response = await challengeByStep(data);

            } else {
                response = await challengeByEmployee(data);
            }
            const listChallenges = response.challenges;
            console.log("LISTA CHALLENGES", listChallenges);

            if (listChallenges && listChallenges.length >= 1) {
                const challenges = listChallenges.map(x => ({
                    key: x.tip.id,
                    challenge_id: x.id,
                    tip_id: x.tip.id,
                    title: x.tip.tip,
                    description: x.tip.description,
                    files: x.tip.file_tips,
                    comment: x.comment,
                    reply: x.reply,
                    uploaded_files: x.files,
                    status: x.status,
                    date_completed: x.date_completed,
                    replies: x.replies.map(item => ({
                        id: item.reply.id,
                        query: item.query,
                        reply: item.reply.reply
                    })),
                    questionnaire: x.tip.questionnaire

                }));
                this.props.getListChallenges(challenges);
                this.setState({
                    blockChallenge: challenges,
                    mostrarImagen: false
                });
            } else {
                this.setState({ mostrarImagen: true })

            }
        } catch (error) {
            // console.log("Error al traer challenges", error);
            this.setState({ mostrarImagen: true })
        }
    }
    handleClick = async (id) => {
        $('#title').val('');
        $('#description').val('');
        this.props.cleanForm("1");
        this.props.getTipId(id);
        const challenge = this.state.blockChallenge.find((element) => element.tip_id === id);        
        const response = await viewedChallenge(challenge.challenge_id);
        console.log("RRESPONSE",response);
        
    }

    render() {
        return (
            <View
                blockChallenge={this.state.blockChallenge}
                mostrarImagen={this.state.mostrarImagen}
                handleClick={this.handleClick}
                project={this.state.project}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    project: state.getIdProjectReducer,
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