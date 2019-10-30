
import React from 'react';
import View from './Challenges-view';
import { challengeByStep } from '../../redux/actions';
import cleanForm from '../../redux/actions/clean-form';
import getIdChallenge from '../../redux/actions/getIdChallenge';
import getListChallenges from '../../redux/actions/getListChallenges';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import $ from 'jquery';

class Challenges extends React.Component {
    
    state = {
        blockChallenge: []
    }

    async componentDidUpdate(nextProps){        
        const {levelId,projectId} = this.props;

        console.log("LEVELID",levelId);
        console.log("PROJECT ID",projectId);
        
        if (nextProps.levelId !== levelId) {           
            if (levelId) {
                console.log("I AM HERE");
                
                var retos = [];
                try {
                    const data = {
                        step_id : levelId,
                        startup_id : projectId
                    };
                    const response = await challengeByStep(data);


                    const listChallenges = response.challenges;

                    console.log("LISTA RETOS",listChallenges);
                    
                    if (listChallenges.length >= 1) {
                        retos = listChallenges.map(x => ({ key: x.tip.id,
                            challengeId : x.id,
                            id: x.tip.id, title: x.tip.tip, 
                            description : x.tip.description,
                            files : x.tip.file_tips,
                            status: x.status }));                        
                        this.props.getListChallenges(retos);
                        console.log("RETOS",retos);                    

                        this.setState({
                            blockChallenge: retos
                        });
                        console.log("listaRetos = ", retos)
                    }
                } catch (error) {
                    console.log("Error al traer challenges");
                } 

            } 
          } 
    }

    handleClick = (id) => {
        console.log("ID TIP",id);
        this.props.getIdChallenge(id);
        $('#title').val('');
        $('#description').val('');
        this.props.cleanForm("1");
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
    getIdChallenge,
    getListChallenges
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Challenges)
)