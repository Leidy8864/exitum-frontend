
import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import getChallenge from '../../redux/actions/get-challenge'
import { verifyChallenge } from '../../redux/actions'
import View from './ModalDare-view';
import $ from 'jquery'

class ModalDare extends React.Component {

    state = {
        tip: '',
        description: '',
        reply: '',
        comment: '',
        reply: '',
        status: '',
    }

    async componentDidUpdate(nextProps){

        const  { challenges } = this.props
        if(nextProps.challenges !== challenges){
            if(challenges) {
                $('#modaldare').on('hidden.bs.modal', () => {
                    this.props.getChallenge(null)
                });
                
                this.setState ({
                    id: challenges.id,
                    tip: challenges.tip.tip,
                    description: challenges.tip.description,
                    reply: challenges.reply
                })
            }
        }
     }

     handleChange = (e) => {
        const value = e.target.value.trim();
        this.setState({
            [e.target.name]: value
        });
    }

     confirmChallenge = async (e) => {
        e.preventDefault()
        this.setState({
            status: 'Con observaciones'
        })
        const { id,comment,status } = this.state
        const data = {
            id,comment,status
        }

        console.log(data)
        const res = await this.props.verifyChallenge(data)
        console.log(res)
     }

    render() {

        var { 
            tip,
            description,
            reply,
        } = this.state

        return (
            <View
                tip = {tip}
                description = {description}
                reply = {reply}
                confirmChallenge = {this.confirmChallenge}
                handleChange = {this.handleChange}
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