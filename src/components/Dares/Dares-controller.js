
import React from 'react';
import View from './Dares-view';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import getChallenge from '../../redux/actions/get-challenge'
import listChallenges from '../../redux/actions/list-challenges'
import { listChallengeToVerify } from '../../redux/actions'

class Dares extends React.Component {

    state = {
        challenges: []
    }

    async componentDidMount () {
        const id = localStorage.getItem('id')
        const challenges = await listChallengeToVerify(id,1)
        this.setState({
            challenges: challenges
        });
    }

    idChallengues = (id) => {
        const  { challenges } = this.state 
        const challenge = challenges.find( challenge => challenge.id === id);
        this.props.getChallenge(challenge);
    }

    render() {

        const { challenges } = this.state

        return (
            <View
                idChallengues = {this.idChallengues}
                challenges = {challenges}
            />
        );
    }
}

const mapStateToProps = (state) => ({    

});

const mapDispatchToProps = {
    listChallengeToVerify,
    getChallenge
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Dares)
)
