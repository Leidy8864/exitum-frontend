
import React from 'react';
import View from './ModalPerfil-view';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserPerfil, notAvailableUser, showDataByUser, hourAvailables, listCountries } from '../../redux/actions'
import $ from 'jquery';
import Swal from 'sweetalert2'
import { convertTimes } from '../../libs/helper';
import reloadPage from '../../redux/actions/reloadPage';
import moment from 'moment';

class ModalPerfil extends React.Component {

    state = {
        name: '',
        lastname_1: '',
        lastname_2: '',
        country: '',
        phone: '',
        birthday_date: new Date(),
        position: '',
        description: '',
        fromHour: '',
        toHour: '',
        selected: "",
        phoneCodes: '',
        hoursOptions: [
            {
                hour: '7:00 AM',
                selected: true
            },
            {
                hour: '8:00 AM',
                selected: true
            },
            {
                hour: '9:00 AM',
                selected: true
            },
            {
                hour: '10:00 AM',
                selected: true
            },
            {
                hour: '11:00 AM',
                selected: true
            },
            {
                hour: '12:00 PM',
                selected: true
            },
            {
                hour: '1:00 PM',
                selected: true
            },
            {
                hour: '2:00 PM',
                selected: true
            },
            {
                hour: '3:00 PM',
                selected: true
            },
            {
                hour: '4:00 PM',
                selected: true
            },
            {
                hour: '5:00 PM',
                selected: true
            },
            {
                hour: '6:00 PM',
                selected: true
            },
            {
                hour: '7:00 PM',
                selected: true
            },
            {
                hour: '8:00 PM',
                selected: true
            },
            {
                hour: '9:00 PM',
                selected: true
            },
            {
                hour: '10:00 PM',
                selected: true
            }
        ],
        available: [],
        isHour: true,
        checked: false
    }

    async componentDidMount() {
        try {
            let id = localStorage.getItem('id')
            const userShow = await showDataByUser(id);
            let birthdayDate = new Date(moment(userShow.data.birthday).format('LLLL'));
            const countrieData = await listCountries();
            let phoneCodes = [];

            var hoursUnavailables = []
            var unavailables = userShow.data.unavailables;
            var hoursOptions = this.state.hoursOptions;
            let hourAvailables = [];
            const country = {
                label: `${userShow.data.country.country}(${userShow.data.country.calling_code})`,
                value: userShow.data.country.id
            }
            for (let index = 0; index < unavailables.length; index++) {
                hoursUnavailables.push(convertTimes(unavailables[index].time))
            }

            for (let index = 0; index < hoursOptions.length; index++) {
                if (hoursUnavailables.includes(hoursOptions[index].hour)) {
                    hoursOptions[index].selected = false;
                } else {
                    hourAvailables.push(hoursOptions[index].hour);
                }
            }
            if (countrieData.length > 0) {
                phoneCodes = countrieData.map(x => ({ label: `${x.country}(${x.calling_code})`, value: x.id }));
            }

            this.setState({
                name: userShow.data.name,
                lastname_1: userShow.data.lastname_1,
                lastname_2: userShow.data.lastname_2,
                birthday_date: userShow.data.birthday ? birthdayDate : new Date(moment().format('LLLL')),
                phone: userShow.data.phone,
                description: userShow.data.description,
                available: hourAvailables,
                phoneCodes: phoneCodes,
                country: country
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


    selectHour = (hourSelected, e) => {
        var hours = this.state.available
        //this.setState({not_available:e.target.id});  
        if (e.target.checked) {
            hours.push(hourSelected);
        } else {
            const index = hours.indexOf(hourSelected);
            hours.splice(index, 1)
        }
        let hour = this.state.hoursOptions.find(item => { return item.hour === hourSelected });
        hour.selected = !hour.selected;

        // console.log("HOURS", hours);

        this.setState({
            available: hours
        })
    }

    handleSelectChange = (option, action) => {
        this.setState({ [action.name]: option });
    };

    updatePerfil = async (e) => {
        e.preventDefault();
        let user_id = localStorage.getItem('id')

        const { name, lastname_1, lastname_2, country, phone, birthday_date, position, available, description } = this.state

        const lastname = lastname_1 + ' ' + lastname_2;
        let birthday = moment(birthday_date).format('YYYY-MM-DD');
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('name', name);

        const ScheduleData = {
            available
        }

        const formData = {
            name, lastname_1, phone, position, birthday, user_id, description,
            lastname_2, country_phone_id: country.value
        }
        console.log("FORMDATA", formData);


        const res = await this.props.updateUserPerfil(formData)
        const ress = await this.props.notAvailableUser(user_id, ScheduleData)

        $('#perfilusuario').modal('hide');
        this.props.reloadPage(1)
        Swal.fire(
            'Buen trabajo',
            'Se ha guardado tu perfil correctamente',
            'success',
        )
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

    onChange = birthday_date => this.setState({ birthday_date })

    render() {

        let browser = (function(){
            var test = function(regexp) { return regexp.test(window.navigator.userAgent);}
            switch(true){
              case test(/edge/i): return "edge";
              case test(/opr/i) && (!!window.opr || !!window.opera): return "opera";
              case test(/chrome/i) && !!window.chrome: return "chrome";
              case test(/trident/i) : return "ie";
              case test(/firefox/i) : return "firefox";
              case test(/safari/i): return "safari";
              default: return "other";
            }
        })();

        const { name, lastname_1, lastname_2, phone, birthday, position, to_hour, from_hour, isHour, hoursOptions, available, description, checked, phoneCodes, country } = this.state
        return (
            <View
                name={name}
                browser = {browser}
                lastname_1={lastname_1}
                lastname_2={lastname_2}
                phoneCodes={phoneCodes}
                phone={phone}
                birthday={this.state.birthday_date}
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
                checked={checked}
                handleSelectChange={this.handleSelectChange}
                country={country}
                onChange={this.onChange}
            />
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    updateUserPerfil,
    notAvailableUser,
    showDataByUser,
    reloadPage
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalPerfil)
)
