
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import getChallenge from '../../redux/actions/get-challenge'
import { verifyChallenge,root } from '../../redux/actions'
import View from './ModalDare-view';
import $ from 'jquery'

class ModalDare extends React.Component {

    state = {
        challenges: [],
        tip: '',
        description: '',
        reply: '',
        comment: '',
        reply: '',
        statusVerify: 'Verificado',
        statusObser: 'Con observaciones',
        file_tips: []
    }

    async componentDidUpdate(nextProps) {

        const { challenges } = this.props
        if (nextProps.challenges !== challenges) {
            if (challenges) {
                $('#modaldare').on('hidden.bs.modal', () => {
                    this.props.getChallenge(null)
                });

                this.setState({
                    challenge_id: challenges.id,
                    tip: challenges.tip.tip,
                    description: challenges.tip.description,
                    reply: challenges.reply,
                    challenges: challenges,
                    file_tips: challenges.tip.file_tips
                })
            }
        }
    }

    handleDownload = async (name) => {
        const fileName = name;

        var a = document.createElement("a");
        a.href = root + 'challenges/download/' + fileName;
        a.target = "_blank";
        a.click()
    }

    handleChange = (e) => {
        const value = e.target.value.trim();
        this.setState({
            [e.target.name]: value
        });
    }

    confirmChallenge = async (e) => {
        e.preventDefault()
        const { challenge_id, statusVerify } = this.state
        let status = statusVerify
        const data = {
            challenge_id, status
        }

        console.log(data)
        const res = await this.props.verifyChallenge(data)
        $('#modaldare').modal('hide')
    }

    observerChallenge = async (e) => {
        e.preventDefault()
        const { challenge_id, comment, statusObser } = this.state
        let status = statusObser
        const data = {
            challenge_id, comment, status
        }

        console.log(data)
        const res = await this.props.verifyChallenge(data)
        $('#modaldare').modal('hide')
    }

    render() {

        var {
            tip,
            description,
            reply,
            files,
            challenges,
            file_tips
        } = this.state

        console.log(file_tips)

        return (
            <View
                tip={tip}
                description={description}
                reply={reply}
                confirmChallenge={this.confirmChallenge}
                handleChange={this.handleChange}
                observerChallenge={this.observerChallenge}
                files = {files}
                challenges = {challenges}
                handleDownload = { this.handleDownload }
                file_tips = { file_tips }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    challenges: state.getChallengeReducer,
});


const mapDispatchToProps = {
    getChallenge,
    verifyChallenge
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalDare)
)