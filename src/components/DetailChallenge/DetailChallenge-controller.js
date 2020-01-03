
import React from 'react';
import View from './DetailChallenge-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cleanForm from '../../redux/actions/clean-form';
import { datailChallenge, completeChallenge, root, deleteFileReplyy, getSummaryChallenge } from '../../redux/actions';
import $ from 'jquery';
import reloadPage from '../../redux/actions/reloadPage';
import getTipId from '../../redux/actions/getTipId';

class DetailChallenge extends React.Component {

    state = {
        file: null,
        reply: '',
        challenge_id: '',
        success_message: '',
        error_message: '',
        error_reply: '',
        error_questionary: '',
        summary: [],
        challenge: {
            challenge_id: '',
            files: [],
            uploaded_files: [],
            questionnaire: 0,
            replies: [{
                id: '',
                query: '',
                reply: ''

            }
            ]
        },
        active: true
    }
    async componentDidUpdate(nextProps) {
        const { tip_id, challenges } = this.props;
        if (nextProps.tip_id !== tip_id) {
            if (tip_id) {
                
                const challenge = challenges.find((challenge) => { return challenge.tip_id === tip_id });
                console.log("challenge.challenge_id ",challenge.challenge_id);
                this.setState({
                    challenge: challenge,
                    challenge_id: challenge.challenge_id,
                    reply: challenge.reply,
                    active: true
                });
                this.props.getTipId('');
            }
        }
    }

    handleGetSummary = async () => {

        const { challenge } = this.state;
        const data = {
            user_id: localStorage.getItem('id'),
            tip_id: challenge.tip_id
        }
        const summary = await getSummaryChallenge(data);
        this.setState({
            summary: summary,
            active: false
        })

    }
    handleDownload = async (key_s3) => {
        const fileName = key_s3;

        var a = document.createElement("a");
        a.href = root + 'challenges/download/' + fileName;
        a.target = "_blank";
        a.click()
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleInputFileChange = (e) => {
        e.preventDefault();
        this.setState({
            file: e.target.files
        });
    }
    handleReplyChange = (e) => {
        const { id, value } = e.target;
        let replies = this.state.challenge.replies;
        replies[id].reply = value;
        this.setState({
            challenge: {
                ...this.state.challenge,
                replies: replies
            }
        })

    }
    handledDeleteFile = async (key_s3) => {
        try {
            const { challenge, challenge_id } = this.state;

            // const challenge_id = challenge_id
            const formData = {
                key_s3,
                challenge_id
            }

            const response = await deleteFileReplyy(formData);

            console.log("REPONSE", response);

            if (response.status) {
                const index = challenge.uploaded_files.findIndex((file) => { return file.key_s3 === key_s3 })
                const files = challenge.uploaded_files.splice(index, 1);
                this.setState({
                    [challenge.uploaded_files]: files
                })
            }
        } catch (error) {

        }
    }
    validateForm = () => {
        const { reply, challenge } = this.state;
        let error_reply = "";
        let error_questionary = "";
        if (!reply) {
            error_reply = 'Debes ingresar un respuesta'
        }
        if (challenge.questionnaire) {
            challenge.replies.forEach((element) => {
                if (!element.reply) {
                    error_questionary = "Debes responder el cuestionario"
                }
            })
        }
        if (error_reply || error_questionary) {
            this.setState({
                error_reply,
                error_questionary
            });
            return false;
        }
        return true
    }
    handleClick = async (e) => {
        this.props.cleanForm("0");
        this.setState({
            error_reply: '',
            error_questionary: ''
        })
        const { reply, file, challenge_id, challenge } = this.state;


        if (this.validateForm()) {            
            try {
                let formData = new FormData();
                if (challenge.questionnaire) {
                    for (let index = 0; index < challenge.replies.length; index++) {                        
                        formData.append('replies', JSON.stringify(challenge.replies[index]));
                    }
                }
                if (file) {
                    for (var i = 0; i < file.length; i++) {
                        formData.append('file', file[i])
                    }
                }
                formData.append("reply", reply)
                formData.append("challenge_id", challenge_id);

                const response = await completeChallenge(formData);
                if (response.status) {
                    this.setState({ success_message: response.message });
                    this.props.reloadPage(1);
                    setTimeout(
                        () => {
                            $('#detailCHallengeModal').modal('hide');
                        },
                        1200
                    );
                } else {
                    this.setState({ error_message: response.message });
                    setTimeout(
                        () => {
                            $('#detailCHallengeModal').modal('hide');
                        },
                        1200
                    );
                }
            } catch (error) {
                console.log("ERROR COMPLETANDO PROYECTO" + error);

            }
        }

    }
    render() {

        const { cleanFormReducer } = this.props;

        let error_reply = this.state.error_reply;
        let error_questionary = this.state.error_questionary;

        let success_message = this.state.success_message;
        let error_message = this.state.error_message;
        let content_error_reply = '';
        let content_message = '';
        let content_error_questionary = '';

        const { reply, summary, active, challenge } = this.state;
        if (cleanFormReducer) {
            error_reply = '';
            success_message = '';
            error_message = '';
            error_questionary ='';
        }
        if (error_reply) {
            content_error_reply = <p>{error_reply}</p>
        }
        if (error_questionary) {
            content_error_questionary = <p>{error_questionary}</p>
        }
        if (success_message) {
            content_message = <div className="success-message my-3"><p className="text-center">{success_message}</p></div>;
        }
        if (error_message) {
            content_message = <div className="error-message my-3"><p className="text-center">{error_message}</p></div>;
        }
        return (
            <View
                challenge={challenge}
                handleClick={this.handleClick}
                handleChange={this.handleChange}
                handleInputFileChange={this.handleInputFileChange}
                handleDownload={this.handleDownload}
                content_error_reply={content_error_reply}
                content_message={content_message}
                content_error_questionary={content_error_questionary}
                handledDeleteFile={this.handledDeleteFile}
                reply={reply}
                handleGetSummary={this.handleGetSummary}
                handleReplyChange={this.handleReplyChange}
                summary={summary}
                active={active}
            />
        );
    }
}

const mapStateToProps = state => ({
    cleanFormReducer: state.cleanFormReducer,
    tip_id: state.getTipIdReducer,
    challenges: state.getListChallengesReducer,

});

const mapDispatchToProps = {
    datailChallenge,
    cleanForm,
    getTipId,
    reloadPage
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(DetailChallenge)
)