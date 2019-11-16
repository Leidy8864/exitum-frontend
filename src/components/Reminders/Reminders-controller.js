
import React from 'react';
import View from './Reminders-view';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import getReminder from '../../redux/actions/get-reminder'
import { appointmentsByUser,appointmentsDelete } from '../../redux/actions';
import Swal from 'sweetalert2'
import $ from 'jquery'

class Reminders extends React.Component {

    state = {
        appointments: [],
    }

    async componentDidMount() {
        try {
            let id = localStorage.getItem('id')
            
            const appointments = await appointmentsByUser(id);
            this.setState({
                appointments
            })
        } catch (error) {
            console.log(error)
        }
    }

    idReminder = async (e) => {
        e.preventDefault();
        const reminder = this.state.appointments[e.target.id];
        this.props.getReminder(reminder);
        console.log(reminder)
        $('#updateReminder').modal('show')
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
                    const response = await this.props.appointmentsDelete(reminder_id,data);
                    if (response.status) {

                    } else {
                        this.setState({
                            res_message: response.message
                        });
                    }
                    // this.props.listEducations(1);
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
    }

    render() {

        const { appointments } = this.state
        return (
            <View
                appointments = {appointments}
                handleClickDeleteReminder = {this.handleClickDeleteReminder}
                idReminder = {this.idReminder}
            />
        );
    }
}

const mapStateToProps = (state) => ({    

});

const mapDispatchToProps = {
    getReminder,
    appointmentsByUser,
    appointmentsDelete,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Reminders)
)