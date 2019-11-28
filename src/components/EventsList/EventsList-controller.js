
import React from 'react';
import View from './EventsList-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listEvents, listMyEvents, deleteEvent, assistEvent, listEventsAssist } from '../../redux/actions';
import { decodeToken } from '../../libs/helper';
import reloadPage from '../../redux/actions/reloadPage';
import Swal from 'sweetalert2';
import $ from 'jquery';
class EventsList extends React.Component {
    state = {
        eventsList: [],
        eventType: 'my_events',
        pages: 1
    }
    componentDidMount() {
        const eventType = this.props.eventType;
        if (eventType === "my_events") {
            this.getListEvents(eventType)
        }

    }
    componentDidUpdate(nextProps) {
        const { eventType, reload } = this.props;
        if (nextProps.eventType !== eventType) {
            if (eventType) {
                this.getListEvents(eventType)
            }
        }
        if (nextProps.reload !== reload) {
            if (reload) {
                this.getListEvents(eventType);
                this.props.reloadPage(0);
            }
        }
    }












    // paginationEvents(eventType,pages){        
    //     var page = 1;
    //     $('#events-list').on('scroll', async () => {
    //         if ($('#events-list').scrollTop() +
    //             $('#events-list').innerHeight() >=
    //             $('#events-list')[0].scrollHeight) {

    //             page = page + 1;                
    //             const data = {
    //                 page : page
    //             }
    //             if (page <= pages) {
    //                 var response = null;
    //                 try {
    //                     if (eventType === "events") {
    //                         response = await listEvents(data);
    //                     }else{
    //                         const result = decodeToken();
    //                         response = await listMyEvents(result.id,data);
    //                     }                        
    //                     if (response.status) {                            
    //                         const eventsList = response.data;

    //                         if (eventsList.length > 0) {                                                            
    //                             var newArray = Object.assign([], this.state.eventsList);
    //                             for (let index = 0; index < eventsList.length; index++) {
    //                                 newArray.push(eventsList[index]);
    //                             }                                
    //                             this.setState({
    //                                 eventsList: newArray,
    //                                 pages : response.pages
    //                             });
    //                         }
    //                     }
    //                 } catch (error) {
    //                     console.error("Error al listar el paginado de eventos");
    //                 }                                                        
    //             }

    //         }
    //     });
    // }
    getListEvents = async (eventType) => {
        var response = null;
        try {
            const result = decodeToken();

            switch (eventType) {
                case "events":
                    const data = {
                        user: result.id
                    }
                    response = await listEvents(data);
                    break;
                case "my_events":
                    response = await listMyEvents(result.id);
                    break;
                case "events_assist":
                    response = await listEventsAssist(result.id);
                    break;
                default:
                    break;
            }
            console.log("RESPONSE", response);
            if (response.status) {
                this.paginationEvents(eventType, response.pages)
                this.setState({
                    eventsList: response.data,
                    eventType: eventType,
                    pages: response.pages
                });
            }

            return response;

        } catch (error) {
            console.log("Error traendo eventos", error);
        }
    }


    paginationEvents(eventType, pages) {
        var page = 1;
        $('#events-list').on('scroll', async () => {
            if ($('#events-list').scrollTop() +
                $('#events-list').innerHeight() >=
                $('#events-list')[0].scrollHeight) {

                page = page + 1;
                const result = decodeToken();
                const data = {
                    user : result.id,
                    page: page
                }
                if (page <= pages) {
                    var response = null;
                    try {
                        // console.log("eventype", eventType);
                        switch (eventType) {
                            case "events":
                                response = await listEvents(data);
                                break;
                            case "my_events":
                                response = await listMyEvents(result.id,data);
                                break;
                            case "events_assist":
                                response = await listEventsAssist(result.id,data);
                                break;
                            default:
                                break;
                        }
                        // console.log("response paginate", response);

                        if (response.status) {
                            const eventsList = response.data;

                            if (eventsList.length > 0) {
                                var newArray = Object.assign([], this.state.eventsList);
                                for (let index = 0; index < eventsList.length; index++) {
                                    newArray.push(eventsList[index]);
                                }
                                // console.log("new array",newArray);

                                this.setState({
                                    eventsList: newArray,
                                    pages: response.pages
                                });
                            }
                        }
                    } catch (error) {
                        console.error("Error al listar el paginado de eventos");
                    }
                }

            }
        });
    }
    handleDeleteEvent = async (event_id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si eliminas este evento, ya no podrás deshacer esta acción.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                try {

                    const response = await deleteEvent(event_id);
                    console.log("RESPONSE deleted", response);

                    if (response.status) {
                        this.props.reloadPage(1)
                    }
                    // const data = {
                    //     advertisement_id: id,
                    //     state: 'archived'
                    // }
                    // const response = await updatAdvertState(data);

                    // if (response.status) {
                    //     this.deleteAds(index,1);
                    // } else {
                    //     this.setState({
                    //         res_message: response.message
                    //     });
                    // }
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
        // console.log("ID",id);

    }
    handleAssistEvent = async (event_id) => {
        try {

            const result = decodeToken();
            const formData = {
                user_id: result.id,
                event_id
            }
            const response = await assistEvent(formData);
            // console.log("response",response);
            if (response.status) {
                this.props.reloadPage(1);
            }
        } catch (error) {
            console.log("Error a la hora de asistir evento", error);

        }

    }
    render() {
        const {
            eventsList,
            eventType
        } = this.state;
        return (
            <View
                eventsList={eventsList}
                eventType={eventType}
                handleDeleteEvent={this.handleDeleteEvent}
                handleAssistEvent={this.handleAssistEvent}
            />
        );
    }
}
const mapStateToProps = state => ({
    eventType: state.getEventTypeReducer,
    reload: state.reloadPageReducer
});

const mapDispatchToProps = {
    reloadPage
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EventsList)
)