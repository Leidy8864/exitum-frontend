
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import View from './ParticipantsList-view';
import { getListParticipants } from '../../redux/actions';
import reloadPage from '../../redux/actions/reloadPage';
import $ from 'jquery';
import { decodeToken } from '../../libs/helper';
import activeBackButton from '../../redux/actions/activeBackButton';
class ParticipantsList extends React.Component {
    state = {
        participants: [{
            user_workshop : {}
        }],
        pages: 1,
        event_id: 0
    }
    componentDidMount() {
        const event_id = this.props.match.params.id;
        this.getDataParticipants(event_id);//Llama a la funcion que consulta los participantes;
    }
    async getDataParticipants(event_id) {
        try {
            const response = await getListParticipants(event_id);  //Llama a la funcion que consulta los participantes;            
            this.paginationData(response.pages);
            this.setState({
                participants: response.status ? response.data : [],
                event_id: event_id,
                pages: response.pages
            });
        } catch (error) {
            console.log("Error al traer la lista de participantes", error);
        }
    }
    componentDidUpdate(nextProps) {
        const { reload } = this.props;
        if (nextProps.reload !== reload) {
            if (reload) {
                const { event_id } = this.state
                this.getDataParticipants(event_id);
                this.props.reloadPage(0);
            }
        }
    }
    //Función encargada de paginar la lista de participantes
    paginationData = (pages) => {
        var page = 1;
        var response = null;
        var participants = [];

        $('#list-participants').on('scroll', async () => {
            if ($('#list-participants').scrollTop() +
                $('#list-participants').innerHeight() >=
                $('#list-participants')[0].scrollHeight) {
                page = page + 1;
                if (page <= pages) {
                    const { event_id } = this.state;

                    try {
                        const data = {
                            page: page
                        }
                        response = await getListParticipants(event_id, data);  //Llama a la funcion que consulta los participantes;                        
                        participants = response.data;

                        if (participants.length > 0) {
                            var newArray = Object.assign([], this.state.participants); //Hace una copia del la lista de participantes hasta antes la paginacion

                            for (let index = 0; index < participants.length; index++) {
                                newArray.push(participants[index]);
                            }
                            this.setState({
                                participants: newArray //Guardamos el nuevo array en el state
                            });
                        }
                    } catch (error) {
                        console.log("ERROR INTENTANDO PAGINAR DATA", error);
                    }
                }

            }
        });
    }
    render() {
        const result = decodeToken();
        return (
            <View
                participants={this.state.participants}
                user_id={result.id}
            />
        );
    }
}
const mapStateToProps = state => ({
    reload: state.reloadPageReducer
});
const mapDispatchToProps = {
    reloadPage
}
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ParticipantsList)
);