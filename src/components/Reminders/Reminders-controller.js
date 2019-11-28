
import React from 'react';
import View from './Reminders-view';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import getReminder from '../../redux/actions/get-reminder'
import getMeet from '../../redux/actions/get-meet'
import { appointmentsByUser,appointmentsDelete, meetingByUser, appointmentsConfirm } from '../../redux/actions';
import listReminders from '../../redux/actions/list-reminders'
import listMeets from '../../redux/actions/list-meets'
import Swal from 'sweetalert2'

class Reminders extends React.Component {

    state = {
        id: '',
        appointments: [],
        meetings: [],
        status: false,
    }

    async componentDidMount() {
        try {
            let id = localStorage.getItem('id')
            // console.log(id)
            const appointments = await appointmentsByUser(id);
            const meetings = await meetingByUser(id)
            // console.log(meetings)
            this.setState({
                appointments,
                meetings,
                id,
            })
            console.log(this.state.id)
        } catch (error) {
            console.log(error)
        }
    }

    refreshReminder = async() => {
        const appointments = await appointmentsByUser(localStorage.getItem('id'));
        console.log(appointments)
        this.setState({
            appointments
        })
        this.props.listReminders(0);
    }

    refreshMeet = async() => {
        const meetings = await meetingByUser(localStorage.getItem('id'));
        console.log(meetings)
        this.setState({
            meetings
        })
        this.props.listMeets(0)
    }

    idReminder = (id) => {
        const  { appointments } = this.state 
        const appointment = appointments.find( appointment => appointment.id === id);
        this.props.getReminder(appointment);
    }

    idMeet = (id) => {
        const {meetings} = this.state;
        const meet = meetings.find(meet => meet.id === id)
        this.props.getMeet(meet);
    }

    handleClickDeleteReminder = async (e) => {
        e.preventDefault();
        const reminder_id = e.target.id;
        console.log(reminder_id)
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
                    const response = await this.props.appointmentsDelete(reminder_id,data);
                    console.log(response)
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
        console.log(meet_id)
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
                    const response = await this.props.appointmentsDelete(meet_id,data);
                    console.log(response)
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
        console.log(meet_notification_confirm_id)

        this.setState({
            status: true
        })

        const { status } = this.state
        console.log(status)
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si aceptas esta reunion, confirmaras una reunion.",
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
                    const response = await this.props.appointmentsConfirm(meet_notification_confirm_id,data);
                    console.log(response)
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
        console.log(meet_notification_id)

        const { status } = this.state
        console.log(status)
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
                try {
                    const data = {
                        status
                    }
                    console.log(data)
                    const response = await this.props.appointmentsDelete(meet_notification_id,data);
                    console.log(response)
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

    render() {

        const { listRemindersReducer, listMeetsReducer } = this.props;

        if(listRemindersReducer === 1) {
            this.refreshReminder();
        }

        if(listMeetsReducer === 1) {
            this.refreshMeet();
        }


        const { appointments, meetings,id } = this.state
        return (
            <View
                appointments = {appointments}
                meetings = {meetings}
                handleClickDeleteReminder = {this.handleClickDeleteReminder}
                handleClickDeleteMeet = {this.handleClickDeleteMeet}
                handleClickDeleteMeetNotification = {this.handleClickDeleteMeetNotification}
                confirmMeetNotification = {this.confirmMeetNotification}
                idReminder = {this.idReminder}
                idMeet = {this.idMeet}
                id = {id}
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