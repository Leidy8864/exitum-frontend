
import React from 'react';
import View from './Challenges-view';
import { challengeByStep } from '../../redux/actions';
import cleanForm from '../../redux/actions/clean-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

class Challenges extends React.Component {
    
    state = {
        blockChallenge: []
    }
    

    async componentDidMount() {

        try {
            let retos = [];
            const listaRetos = await challengeByStep(1);
            if (listaRetos.length >= 1) {
                retos = listaRetos.map(x => ({ key: x.id_reto, id: x.id_reto, title: x.title, status: x.status }));
                // this.setState({
                //     // selected: listaRetos[0].id,
                //     // show_add_proyect_empty: false,
                // });
                console.log("listaRetos = ", retos)
            }else{
                // this.setState({
                //     // selected: listaRetos[0].id,
                //     // show_add_proyect_empty: true,
                // });
            }

            this.setState({
                blockChallenge: retos
            });

        } catch (error) {
            console.log("ERROR");
        }

    }

    cleanForm = () => {
        $('#title').val('');
        $('#description').val('');
        this.props.cleanForm("1");
    }

    render() {
        return (
            <View
                blockChallenge={this.state.blockChallenge}
                cleanForm={this.cleanForm}
            />
        );
    }
}

const mapDispatchToProps = {
    challengeByStep,
    cleanForm,
};


export default withRouter(
    connect(null, mapDispatchToProps)(Challenges)
)