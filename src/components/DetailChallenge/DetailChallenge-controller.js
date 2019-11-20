
import React from 'react';
import View from './DetailChallenge-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cleanForm from '../../redux/actions/clean-form';
import { datailChallenge, completeChallenge, root, deleteFileReplyy, getSummaryChallenge } from '../../redux/actions';
import $ from 'jquery';
class DetailChallenge extends React.Component {

    state = {
        file: null,
        reply: '',
        challenge_id: '',
        success_message: '',
        error_message: '',
        error_reply: '',
        summary: [],
        challenge: {
            challenge_id: '',
            files: [],
            uploaded_files: []
        },
        active : true
    }

    componentDidMount(){
        console.log("IN DID MOUNT");
    }
    async componentDidUpdate(nextProps) {
        const { tip_id, challenges } = this.props;
        if (nextProps.tip_id !== tip_id) {
            if (tip_id) {
                console.log("CHALLENGE ID", tip_id);

                const challenge = challenges.find((challenge) => { return challenge.tip_id === tip_id });
                this.setState({
                    challenge: challenge,
                    challenge_id: challenge.challenge_id,
                    reply: challenge.reply,
                    active : true
                });
            }
        }
    }

    handleGetSummary = async () =>{
                
        const {challenge} = this.state;
        
        const data = {
            user_id: localStorage.getItem('id'),
            tip_id: challenge.tip_id
        }

        const summary = await getSummaryChallenge(data);

        console.log("RESPONSE", summary);
        this.setState({
            summary : summary,
            active : false
        })

    }
    handleDownload = async (name) => {
        const fileName = name;

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
        let file = e.target.files[0];

        this.setState({
            file: file
        });
    }
    handledDeleteFile = async (key_s3) => {
        console.log("KEY", key_s3);

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
    handleClick = async (e) => {
        this.props.cleanForm("0");
        this.setState({
            error_reply: ''
        })
        const { reply, file, challenge_id } = this.state;
        let formData = new FormData();
        formData.append("file", file);
        formData.append("reply", reply)
        formData.append("challenge_id", challenge_id);


        if (reply) {

            try {
                const response = await completeChallenge(formData);
                if (response.status) {
                    this.setState({ success_message: response.message });
                    setTimeout(
                        () => {
                            $('#detailCHallengeModal').modal('hide');
                            window.location.reload();
                        },
                        1200
                    );
                } else {
                    this.setState({ error_message: response.message });
                    // setTimeout(
                    //     () => {
                    //         $('#detailCHallengeModal').modal('hide');
                    //         window.location.reload();
                    //     },
                    //     1000
                    // );
                }
            } catch (error) {
                console.log("ERROR COMPLETANDO PROYECTO" + error);

            }
        } else {
            this.setState({ error_reply: 'Debes ingresar un respuesta' })
        }

    }
    render() {

        const { cleanFormReducer } = this.props;

        let error_reply = this.state.error_reply;
        let success_message = this.state.success_message;
        let error_message = this.state.error_message;
        let content_error_reply = '';
        let content_message = '';

        const { reply, summary,active } = this.state;
        if (cleanFormReducer) {
            error_reply = '';
            success_message = '';
            error_message = '';
        }
        if (error_reply) {
            content_error_reply = <p>{error_reply}</p>
        }
        if (success_message) {
            content_message = <div className="success-message my-3"><p className="text-center">{success_message}</p></div>;
        }
        if (error_message) {
            content_message = <div className="error-message my-3"><p className="text-center">{error_message}</p></div>;
        }
        return (
            <View
                challenge={this.state.challenge}
                handleClick={this.handleClick}
                handleChange={this.handleChange}
                handleInputFileChange={this.handleInputFileChange}
                handleDownload={this.handleDownload}
                content_error_reply={content_error_reply}
                content_message={content_message}
                handledDeleteFile={this.handledDeleteFile}
                reply={reply}
                handleGetSummary={this.handleGetSummary}
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
    cleanForm
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(DetailChallenge)
)