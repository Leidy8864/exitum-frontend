
import React from 'react';
import View from './ModalPerfil-view';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserPerfil,showSchedulesByUser } from '../../redux/actions'

class ModalPerfil extends React.Component {

    state = {
        name: localStorage.getItem('name'),
        lastname: localStorage.getItem('lastname'),
        phone: '',
        birthday: '',
        position: '',
        fromHour: '',
        toHour: ''
    }

    namePerfil = e => {
        this.setState({name: e.target.value});
    }

    lastnamePerfil = e => {
        this.setState({lastname: e.target.value})
    }

    phonePerfil = e => {
        this.setState({phone: e.target.value})
    }

    birthdayPerfil = e => {
        this.setState({ birthday: e.target.value});
    }

    positionPerfil = e => {
        this.setState({ position: e.target.value});
    }

    fromHourPerfil = e => {
        this.setState({ fromHour: e.target.value });
    }

    toHourPerfil = e => {
        this.setState({ toHour: e.target.value })
    }

    convertTimes = (time) => {
        console.log('la hora es:'  + time)
        var regHrs = /^(\d+)/g;
        var regMnts = /:(\d+)/g;
        var hrs = Number(regHrs.exec(time)[1]);
        var mnts = Number(regMnts.exec(time)[1]);

        if (hrs > 24 || hrs < 0 || mnts > 59 || mnts < 0) throw("Opps! formato de hora incorrecto.");
        if(mnts < 10) mnts = `0${mnts}`

        if (hrs > 0 && hrs < 12) time = `${hrs}:${mnts} AM`
        if (hrs > 12 && hrs < 24) time = `${hrs - 12}:${mnts} PM`
        if (hrs == 0) time = `12:${mnts} AM`
        if (hrs == 12) time = `12:${mnts} PM`
        
        return time
    }

    updatePerfil = async (e) => {
        e.preventDefault();

        let user_id = localStorage.getItem('id')

        const { name,lastname,phone,birthday,position,fromHour,toHour} = this.state

        var from_hour = this.convertTimes(fromHour);
        var to_hour = this.convertTimes(toHour)

        const ScheduleData = {
            from_hour,
            to_hour
       }

        const formData = {
            name,lastname,phone,position,birthday,user_id
        }

        const res = await this.props.updateUserPerfil(formData)
        const resTime = await this.props.showSchedulesByUser(user_id,ScheduleData)
    }


    render() {
        const { name,lastname,phone,birthday,position,to_hour,from_hour } = this.state
        return (
            <View
                name= {name}
                lastname={lastname}
                phone={phone}
                birthday = {birthday}
                position = {position}
                from_hour = {from_hour}
                formatAMPM = {this.formatAMPM}
                to_hour = {to_hour}
                namePerfil={this.namePerfil}
                lastnamePerfil={this.lastnamePerfil}
                phonePerfil={this.phonePerfil}
                birthdayPerfil ={this.birthdayPerfil}
                positionPerfil={this.positionPerfil}
                fromHourPerfil = {this.fromHourPerfil}
                toHourPerfil = {this.toHourPerfil}
                updatePerfil = {this.updatePerfil}
            />
        );
    }
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = {
    updateUserPerfil,
    showSchedulesByUser
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalPerfil)
)
