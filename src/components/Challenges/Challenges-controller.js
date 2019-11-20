
import React from 'react';
import View from './Challenges-view';
import { challengeByStep, challengeByEmployee } from '../../redux/actions';
import cleanForm from '../../redux/actions/clean-form';
import getTipId from '../../redux/actions/getTipId';
import getListChallenges from '../../redux/actions/getListChallenges';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import $ from 'jquery';

const role = localStorage.getItem('role');
const user_id = localStorage.getItem('id');
class Challenges extends React.Component {
    
    state = {
        blockChallenge: []
    }

    async componentDidMount(){
        var response = null;
        const step_id = localStorage.getItem('level_id');
        const startup_id = localStorage.getItem('idProject');
        if (role === "entrepreneur") {
            const data = {
                step_id : step_id,
                startup_id : startup_id
            };
            response = await challengeByStep(data);
        }else{
            const data = {
                step_id : step_id,
                user_id : user_id
            };
            response = await challengeByEmployee(data);
        }

        this.mapChallenges(response.challenges)


    }
    async componentDidUpdate(nextProps){        
        const {levelId,projectId} = this.props;
        if (nextProps.levelId !== levelId) {           
            if (levelId) {
                try {
                    var response = null;
                    if (role === "entrepreneur") {
                        const data = {
                            step_id : levelId,
                            startup_id : projectId
                        };
                        response = await challengeByStep(data);
                    }else{
                        const data = {
                            step_id : levelId,
                            user_id : user_id
                        };
                        response = await challengeByEmployee(data);
                    }
            
                    this.mapChallenges(response.challenges)
                } catch (error) {
                    console.log("Error al traer challenges");
                } 

            } 
          } 
    }

    mapChallenges = async (listChallenges) => {
        if (listChallenges.length >= 1) {
            const retos = listChallenges.map(x => ({ key: x.tip.id,
                challenge_id : x.id,
                tip_id: x.tip.id, 
                title: x.tip.tip, 
                description : x.tip.description,
                files : x.tip.file_tips,
                reply : x.reply,
                uploaded_files : x.files,
                status: x.status }));                        
            this.props.getListChallenges(retos);              

            this.setState({
                blockChallenge: retos
            });
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
    projectId: state.getIdProjectReducer,    
    levelId: state.getIdStageReducer,
});

const mapDispatchToProps = {
    challengeByStep,
    cleanForm,
    getTipId,
    getListChallenges
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Challenges)
)