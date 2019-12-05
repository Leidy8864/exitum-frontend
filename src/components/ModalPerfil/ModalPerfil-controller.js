
import React from 'react';
import View from './ModalPerfil-view';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserPerfil, notAvailableUser, showDataByUser } from '../../redux/actions'
import $ from 'jquery';
import Swal from 'sweetalert2'

class ModalPerfil extends React.Component {

    state = {
        name: '',
        lastname: '',
        phone: '',
        birthday: '',
        position: '',
        description: '',
        fromHour: '',
        toHour: '',
        selected: "",
        hoursOptions: [
            '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
            '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
            '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM',
        ],
        available: [],
        isHour: true
    }

    async componentDidMount() {
        try {
            let id = localStorage.getItem('id')
            const userShow = await showDataByUser(id);
            console.log(userShow)
            this.setState({
                name: userShow.data.name,
                lastname: userShow.data.lastname,
                birthday: userShow.data.birthday,
                phone: userShow.data.phone,
                description: userShow.data.description
            })
        } catch (error) {
            console.log(error)
        }
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
        var hours = this.state.available
        //this.setState({not_available:e.target.id});  
        if (e.target.checked) {
            hours.push(e.target.id)
        } else {
            const index = hours.indexOf(e.target.id);
            hours.splice(index, 1)
        }
        console.log('array', hours);
        this.setState({
            available: hours
        })
    }

    updatePerfil = async (e) => {
        e.preventDefault();
        console.log('hola')
        let user_id = localStorage.getItem('id')

        const { name, lastname, phone, birthday, position, available, description } = this.state

        const ScheduleData = {
            available
        }

        console.log(ScheduleData)

        const formData = {
            name, lastname, phone, position, birthday, user_id, description
        }

        console.log(formData)

        const res = await this.props.updateUserPerfil(formData)
        const ress = await this.props.notAvailableUser(user_id, ScheduleData)

        console.log(ress)
        console.log(res)

        $('#perfilusuario').modal('hide');
        // Swal.fire(
        //     'Buen trabajo',
        //     'Se ha guardado tu perfil correctamente',
        //     'success',
        // )
        // this.props.listMeets(1)
        
        // } else {
        //     Swal.fire({
        //         type: 'error',
        //         text: 'Ya hay una hora reservada para esta reunión, elije una hora disponible',
        //         showConfirmButton: false
        //     })
        //     // this.props.listMeets(1)
        //     $('#perfilusuario').modal('hide')
        // }
    }


    render() {
        const { name, lastname, phone, birthday, position, to_hour, from_hour, isHour, hoursOptions, available, description } = this.state
        return (
            <View
                name={name}
                lastname={lastname}
                phone={phone}
                birthday={birthday}
                position={position}
                available={available}
                description={description}
                from_hour={from_hour}
                formatAMPM={this.formatAMPM}
                to_hour={to_hour}
                selectHour={this.selectHour}
                updatePerfil={this.updatePerfil}
                selectTypeDiary={this.selectTypeDiary}
                isHour={isHour}
                hoursOptions={hoursOptions}
                handleChange={this.handleChange}
            />
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    updateUserPerfil,
    notAvailableUser,
    showDataByUser
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalPerfil)
)
