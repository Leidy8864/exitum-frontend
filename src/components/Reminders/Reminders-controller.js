
import React from 'react';
import View from './Reminders-view';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import getReminder from '../../redux/actions/get-reminder'
import getMeet from '../../redux/actions/get-meet'
import { appointmentsByUser, appointmentsDelete, meetingByUser, appointmentsConfirm } from '../../redux/actions';
import listReminders from '../../redux/actions/list-reminders'
import listMeets from '../../redux/actions/list-meets'
import Swal from 'sweetalert2'
import $ from 'jquery';
class Reminders extends React.Component {

    state = {
        id: '',
        appointments: [],
        meetings: [],
        statusFalse: false,
        statusTrue: true
    }

    async componentDidMount() {
        try {
            let id = localStorage.getItem('id')
            const appointments = await appointmentsByUser(id);
            const meetings = await meetingByUser(id);
            this.showMoreOrLessText();
            this.setState({
                appointments,
                meetings,
                id,
            })
        } catch (error) {
            console.log(error)
        }
    }

    // changeSee = e => {
    //     e.preventDefault()
    //     if(e.target.id == "mas"){
    //         document.getElementById("menos").style.display="block";
    //         document.getElementById("big").style.height="auto"   
    //         document.getElementById("mas").style.display="none"; 
    //     }else{
    //         document.getElementById("big").style.display="block";   
    //         document.getElementById("mas").style.display="block"; 
    //         document.getElementById("big").style.height="58px"
    //         document.getElementById("menos").style.display="none";
    //     }
    // }

    changeSeeReminder = (e, index) => {
        e.preventDefault()
        if (e.target.id == (index + "mas")) {
            document.getElementById("menoss").style.display = "block";
            document.getElementById("bigs").style.height = "auto"
            document.getElementById("mass").style.display = "none";
        } else {
            document.getElementById("bigs").style.display = "block";
            document.getElementById("mass").style.display = "block";
            document.getElementById("bigs").style.height = "58px"
            document.getElementById("menoss").style.display = "none";
        }
    }

    refreshReminder = async () => {
        const appointments = await appointmentsByUser(localStorage.getItem('id'));
        this.setState({
            appointments
        })
        this.props.listReminders(0);
    }

    refreshMeet = async () => {
        const meetings = await meetingByUser(localStorage.getItem('id'));
        this.setState({
            meetings
        })
        this.props.listMeets(0)
    }

    idReminder = (id) => {
        const { appointments } = this.state
        const appointment = appointments.data.find(appointment => appointment.id === id);
        this.props.getReminder(appointment);
    }

    idMeet = (id) => {
        const { meetings } = this.state;
        const meet = meetings.data.find(meet => meet.id === id)
        this.props.getMeet(meet);
    }

    handleClickDeleteReminder = async (e) => {
        e.preventDefault();
        const reminder_id = e.target.id;
        var id = e.target.id;
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si eliminas este recordatorio, ya no podrás deshacer esta acción.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                try {
                    const data = {
                        from_user_id: localStorage.getItem('id'),
                        to_user_id: localStorage.getItem('id')
                    }
                    const response = await this.props.appointmentsDelete(reminder_id, data);
                    if (response.status) {

                    } else {
                        this.setState({
                            res_message: response.message
                        });
                    }
                    this.props.listReminders(1);
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
    }

    handleClickDeleteMeet = async (e) => {
        e.preventDefault();
        const meet_id = e.target.id;
        var id = e.target.id;
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si eliminas este recordatorio, ya no podrás deshacer esta acción.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                try {
                    const data = {
                        from_user_id: localStorage.getItem('id')
                    }
                    const response = await this.props.appointmentsDelete(meet_id, data);
                    if (response.status) {

                    } else {
                        this.setState({
                            res_message: response.message
                        });
                    }
                    this.props.listMeets(1);
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
    }

    confirmMeetNotification = async (e) => {
        e.preventDefault();
        const meet_notification_confirm_id = e.target.id;

        const { statusTrue } = this.state 

        let status = statusTrue

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Aceptaras la reunion para establecer un acuerdo con el contacto",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                try {
                    const data = {
                        status
                    }
                    const response = await this.props.appointmentsConfirm(meet_notification_confirm_id, data);
                    if (response.status) {

                    } else {
                        this.setState({
                            res_message: response.message
                        });
                    }
                    this.props.listMeets(1);
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
    }

    handleClickDeleteMeetNotification = async (e) => {
        e.preventDefault();
        const meet_notification_id = e.target.id;
        

        const { statusFalse } = this.state 

        let status = statusFalse

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si eliminas esta reunion, ya no podrás deshacer esta acción.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                const data = {
                    status
                }
                await this.props.appointmentsDelete(meet_notification_id, data);
                this.props.listMeets(1);
                Swal.fire(
                    'Eliminado',
                    'El recordatorio ha sido eliminado correctamente',
                    'success'
                )
            }
        }
        );
    }

    showMoreOrLessText = () => {
        $(document).ready(function () {
            var showChar = 50;
            var ellipsestext = "...";
            var moretext = "Ver más";
            var lesstext = "Ver menos";
            $('.description-text').each(function () {
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
        const { listRemindersReducer, listMeetsReducer } = this.props;

        if (listRemindersReducer === 1) {
            this.refreshReminder();
        }

        if (listMeetsReducer === 1) {
            this.refreshMeet();
        }


        const { appointments, meetings, id } = this.state
        return (
            <View
                appointments={appointments}
                meetings={meetings}
                handleClickDeleteReminder={this.handleClickDeleteReminder}
                handleClickDeleteMeet={this.handleClickDeleteMeet}
                handleClickDeleteMeetNotification={this.handleClickDeleteMeetNotification}
                confirmMeetNotification={this.confirmMeetNotification}
                idReminder={this.idReminder}
                idMeet={this.idMeet}
                id={id}
                changeSeeMeet={this.changeSeeMeet}
                changeSeeReminder={this.changeSeeReminder}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    listRemindersReducer: state.listRemindersReducer,
    listMeetsReducer: state.listMeetsReducer
});

const mapDispatchToProps = {
    getReminder,
    getMeet,
    appointmentsByUser,
    listReminders,
    meetingByUser,
    appointmentsDelete,
    listMeets,
    appointmentsConfirm
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Reminders)
)