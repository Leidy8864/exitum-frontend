
import React from 'react';
import View from './Dares-view';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import getChallenge from '../../redux/actions/get-challenge'
import listChallenges from '../../redux/actions/list-challenges'
import { listChallengeToVerify } from '../../redux/actions'
import $ from 'jquery'

class Dares extends React.Component {

    state = {
        challenges: []
    }

    async componentDidMount () {
        const id = localStorage.getItem('id')
        const challenges = await listChallengeToVerify(id,1)
        console.log(challenges)
        this.setState({
            challenges: challenges
        });
    }


    idChallengues = (id) => {
        const  { challenges } = this.state 
        const challenge = challenges.find( challenge => challenge.id === id);
        this.props.getChallenge(challenge);
    }

    showMoreOrLessTextEvent = () => {
        $(document).ready(function () {
            var showChar = 50;
            var ellipsestext = "...";
            var moretext = "Ver más";
            var lesstext = "Ver menos";
            $('#text-puntos').each(function () {
                var content = $(this).html();                
                if (content.length > showChar) {

                    var c = content.substr(0, showChar);
                    var h = content.substr(showChar - 1, content.length - showChar);

                    var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

                    $(this).html(html);
                }

            });

            $(".morelink").click(function () {
                if ($(this).hasClass("less")) {
                    $(this).removeClass("less");
                    $(this).html(moretext);
                } else {
                    $(this).addClass("less");
                    $(this).html(lesstext);
                }
                $(this).parent().prev().toggle();
                $(this).prev().toggle();
                return false;
            });
        });

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
