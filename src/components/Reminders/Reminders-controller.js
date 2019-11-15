
import React from 'react';
import View from './Reminders-view';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { appointmentsByUser } from '../../redux/actions';

class Reminders extends React.Component {

    state = {
        appointments: '',
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

    render() {

        const { appointments } = this.state
        return (
            <View
                appointments = {appointments}
            />
        );
    }
}

const mapStateToProps = (state) => ({    

});

const mapDispatchToProps = {
    appointmentsByUser
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Reminders)
)