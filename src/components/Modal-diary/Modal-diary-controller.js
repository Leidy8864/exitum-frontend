
import React from 'react';
import View from './Modal-diary-view';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { appointmentsUser, listUsers, hourAvailables } from '../../redux/actions'
import listReminders from '../../redux/actions/list-reminders'
import listMeets from '../../redux/actions/list-meets'
import moment from 'moment';
import $ from 'jquery'
import Swal from 'sweetalert2'


class ModalDiary extends React.Component {
    state = {
        title: '',
        time: '',
        type: '',
        dateMeet: '',
        users: [],
        description: '',
        isClearable: true,
        isDisabled: false,
        isLoading: false,
        isRtl: false,
        isSearchable: true,
        date: new Date(),
        selected: "",
        hoursOptions: [],
        isMeet: false,
        isReminder: false,
        isHour: false,
        selectedOption: null,
        to_user_id: '',
        hourAvailables: [],
        isDisabled_: true,
    };

    async componentDidMount() {
        try {
            // const advert_id = this.props.match.params.id;
            let usuarios = [];
            let users = await listUsers(localStorage.getItem('id'))
            if (users && users.length >= 1) {
                usuarios = users.map(x => ({ label: x.fullname, value: x.id }));
            }
            this.setState({
                users: usuarios
            });
        } catch (error) {
            console.log("Error al ver detalle de anuncio", error);
        }
    }

    handleChange = async (selectedOption) => {
        this.setState({ selectedOption, isDisabled_: false })
        const data = {
            date: moment(this.state.date).format('YYYY-MM-DD')
        }

        const hourAvailables = await this.props.hourAvailables(selectedOption.value, data);
        this.setState({ hourAvailables })
        this.setState({ to_user_id: selectedOption.value })
    };

    handleChangeForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    selectHour = async (e) => {
        this.setState({ selected: e.target.id });
    }

    selectTypeDiary = async (e) => {
        if (e.target.value === 'reunion') {
            this.setState({ type: e.target.value })
            this.setState({ hoursOptions: [] });
            this.setState({ isMeet: true });
            this.setState({ isHour: true });
            this.setState({ isReminder: false })
        } else {
            this.setState({ type: e.target.value })
            this.setState({ isMeet: false });
            this.setState({ isReminder: true })
            this.setState({ isHour: true });
            this.setState({
                hoursOptions: [
                    // '6:00 am', 
                    '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
                    '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm',
                    '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', 
                    // '11:00 pm', '12:00 am',
                ]
            });
        }
    }

    saveReminder = async (e) => {
        e.preventDefault();
        let from_user_id = localStorage.getItem('id')
        const { title, date, selected, description, type } = this.state
        let time = selected
        const formData = {
            title: title, date: moment(date).format('YYYY-MM-DD'), time: time, description: description, type: type, from_user_id: from_user_id
        }

        const res = await this.props.appointmentsUser(from_user_id, formData);
        if (res.status == true) {
            Swal.fire(
                'Buen trabajo',
                'Se guardo el recordatorio correctamente',
                'success',
            )
            this.props.listReminders(1)
            $('#newdiary').modal('hide')
            this.cleanState();
        } else {
            Swal.fire({
                type: 'error',
                text: 'Ya hay una hora reservada para esta recordatorio, elige una hora disponible',
                showConfirmButton: false
            })
            this.props.listReminders(1);
            $('#newdiary').modal('hide');
            this.cleanState();
        }
    }

    saveMeet = async (e) => {
        e.preventDefault();

        let from_user_id = localStorage.getItem('id')
        const { title, description, date, to_user_id, selected, type } = this.state
        let time = selected
        console.log(to_user_id)
        const formMeet = {
            title: title, description: description, from_user_id: from_user_id, time: time, type: type, date: moment(date).format('YYYY-MM-DD')
        }

        const data = {
            date: moment(date).format('YYYY-MM-DD')
        }

        const res = await this.props.hourAvailables(to_user_id, data);
        const resHour = await this.props.appointmentsUser(to_user_id, formMeet);
        if (res.status == true || resHour.status == true) {
            Swal.fire(
                'Buen trabajo',
                'Se ha guardado la reunión correctamente',
                'success',
            )
            this.props.listMeets(1)
            $('#newdiary').modal('hide')
            this.cleanState();
        } else {
            Swal.fire({
                type: 'error',
                text: 'Ya hay una hora reservada para esta reunión, elige una hora disponible',
                showConfirmButton: false
            })
            this.props.listMeets(1)
            $('#newdiary').modal('hide')
            this.cleanState();
        }
    }

    onChange = async date => {
        this.setState({ date })
        const hourAvailables = await this.props.hourAvailables(this.state.to_user_id, { date: moment(date).format('YYYY-MM-DD') });
        this.setState({ hourAvailables })
    }

    toggleClearable = () =>
        this.setState(state => ({ isClearable: !state.isClearable }));
    toggleDisabled = () =>
        this.setState(state => ({ isDisabled: !state.isDisabled }));
    toggleLoading = () =>
        this.setState(state => ({ isLoading: !state.isLoading }));
    toggleRtl = () => this.setState(state => ({ isRtl: !state.isRtl }));
    toggleSearchable = () =>
        this.setState(state => ({ isSearchable: !state.isSearchable }));

    handleInputChange = async (inputValue, actionMeta) => {

    };

    cleanState = () => {
        this.setState({
            title : '',
            description : '',
            date : new Date(),
            hourAvailables : [],
            selectedOption : null
        });
    }

    render() {
        const {
            title,
            date,
            time,
            description,
            isClearable,
            isSearchable,
            isDisabled,
            isLoading,
            isRtl,
            selected,
            hoursOptions,
            isMeet,
            isHour,
            isReminder,
            users,
            selectedOption,
            hourAvailables,
            isDisabled_
        } = this.state;
        return (
            <View
                selectedOption={selectedOption}
                title={title}
                date={date}
                time={time}
                hourAvailables={hourAvailables}
                isReminder={isReminder}
                isDisabled_={isDisabled_}
                saveReminder={this.saveReminder}
                description={description}
                onChange={this.onChange}
                className="basic-single"
                contactoClassNamePrefix="contacto"
                contactoPlaceholder="contacto ..."
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                handleChange={this.handleChange}
                hoursOptions={hoursOptions}
                selectHour={this.selectHour}
                options={users}
                selected={selected}
                onChange_={this.onChange_}
                saveMeet={this.saveMeet}
                // onChange_={this.handleChange}
                handleInputChange={this.handleInputChange}
                selectTypeDiary={this.selectTypeDiary}
                isMeet={isMeet}
                isHour={isHour}
                saveMeeting={this.saveMeeting}
                handleChangeForm={this.handleChangeForm}
            />
        );
    }
}

const mapStateToProps = state => ({
    listRemindersReducer: state.listRemindersReducer,
    listUsersReducer: state.listUsersReducer
});

const mapDispatchToProps = {
    appointmentsUser,
    listUsers,
    listReminders,
    listMeets,
    hourAvailables
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalDiary)
)

