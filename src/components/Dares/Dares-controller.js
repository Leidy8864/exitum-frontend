
import React from 'react';
import View from './Dares-view';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import getChallenge from '../../redux/actions/get-challenge'
import listChallenges from '../../redux/actions/list-challenges'
import updateChallenge from '../../redux/actions/update-challenge'
import { listChallengeToVerify } from '../../redux/actions'
import $ from 'jquery'

class Dares extends React.Component {

    state = {
        challenges: []
    }

    async componentDidMount() {
        const id = localStorage.getItem('id')
        const challenges = await listChallengeToVerify(id, 1)
        this.setState({
            challenges: challenges
        });
    }


    idChallengues = (id) => {
        const { challenges } = this.state
        const challenge = challenges.find(challenge => challenge.id === id);
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

    refreshDares = async () => {
        const id = localStorage.getItem('id')
        const challenges = await listChallengeToVerify(id, 1)
        this.setState({
            challenges: challenges
        });

        this.props.updateChallenge(0);
    }

    render() {

        const { challenges } = this.state
        const { updateChallengeReducer } = this.props;

        if (updateChallengeReducer === 1) {
            this.refreshDares();
        }

        return (
            <View
                idChallengues={this.idChallengues}
                challenges={challenges}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    updateChallengeReducer: state.updateChallengeReducer,
});

const mapDispatchToProps = {
    listChallengeToVerify,
    getChallenge,
    updateChallenge
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Dares)
)
