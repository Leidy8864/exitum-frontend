
import React from 'react';
import View from './ModalPerfil-view';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserPerfil, notAvailableUser } from '../../redux/actions'

class ModalPerfil extends React.Component {

    state = {
        name: localStorage.getItem('name'),
        lastname: localStorage.getItem('lastname'),
        phone: '',
        birthday: '',
        position: '',
        fromHour: '',
        not_available: [
            '7:00 am','8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
            '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm',
            '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm',
        ],
        toHour: '',
        selected : "",
        hoursOptions: [
            '7:00 am','8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
            '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm',
            '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm',
        ],
        isHour: true
    }

    handleChange = (e) => {
        const value = e.target.value.trim();
        this.setState({
            [e.target.name]: value
        });
    }

    convertTimes = (time) => {
        var regHrs = /^(\d+)/g;
        var regMnts = /:(\d+)/g;
        var hrs = Number(regHrs.exec(time)[1]);
        var mnts = Number(regMnts.exec(time)[1]);

        if (hrs > 24 || hrs < 0 || mnts > 59 || mnts < 0) throw ("Opps! formato de hora incorrecto.");
        if (mnts < 10) mnts = `0${mnts}`

        if (hrs > 0 && hrs < 12) time = `${hrs}:${mnts} AM`
        if (hrs > 12 && hrs < 24) time = `${hrs - 12}:${mnts} PM`
        if (hrs == 0) time = `12:${mnts} AM`
        if (hrs == 12) time = `12:${mnts} PM`

        return time
    }

    selectHour = e => {
        this.setState({not_available:e.target.id});  
        console.log(e.target.id)
        // this.state.not_available.filter(x => x.indexOf !== this.state.not_available)
        // productos: state.productos.filter(producto => producto.id !== action.payload)
    }

    updatePerfil = async (e) => {
        e.preventDefault();

        let user_id = localStorage.getItem('id')

        const { name, lastname, phone, birthday, position, fromHour, toHour,no_available } = this.state

        // var from_hour = this.convertTimes(fromHour);
        // var to_hour = this.convertTimes(toHour)

        // const ScheduleData = {
        //     from_hour,
        //     to_hour
        // }

        const ScheduleData = {
            
        }

        const formData = {
            name, lastname, phone, position, birthday, user_id,no_available
        }

        console.log(formData)

        // const res = await this.props.updateUserPerfil(formData)
        const resTime = await this.props.notAvailableUser(user_id, ScheduleData)
    }


    render() {
        const { name, lastname, phone, birthday, position, to_hour, from_hour, isHour, hoursOptions } = this.state
        return (
            <View
                name={name}
                lastname={lastname}
                phone={phone}
                birthday={birthday}
                position={position}
                from_hour={from_hour}
                formatAMPM={this.formatAMPM}
                to_hour={to_hour}
                namePerfil={this.namePerfil}
                lastnamePerfil={this.lastnamePerfil}
                phonePerfil={this.phonePerfil}
                birthdayPerfil={this.birthdayPerfil}
                selectHour={this.selectHour}
                updatePerfil={this.updatePerfil}
                selectTypeDiary={this.selectTypeDiary}
                isHour={isHour}
                hoursOptions={hoursOptions}
                handleSelectChange={this.handleSelectChange}
            />
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    updateUserPerfil,
    notAvailableUser
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalPerfil)
)
