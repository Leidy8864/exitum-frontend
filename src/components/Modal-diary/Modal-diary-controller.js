
import React from 'react';
import View from './Modal-diary-view';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';  
import { appointmentsUser, listUsers } from '../../redux/actions'
import listReminders from '../../redux/actions/list-reminders'
import moment from 'moment';
import $ from 'jquery'

class ModalDiary extends React.Component {
    state = {
        title: '',
        time: '',
        type: '',
        users: [],
        description: '',
        isClearable: true,
        isDisabled: false,
        isLoading: false,
        isRtl: false,
        isSearchable: true,
        date: new Date(),
        selected : "",
        hoursOptions: [],
        isMeet: false,
        isHour: false
    };
      
    async componentDidMount() {
        try {
            // const advert_id = this.props.match.params.id;
            let usuarios = [];
            let users = await listUsers(localStorage.getItem('id'))
            if (users && users.length >= 1) {
                usuarios = users.map(x => ({ label: x.fullname, value: x.fullname }));
                console.log(usuarios)
            }
            console.log("users",users);
            this.setState({
                users: usuarios
            });
        } catch (error) {
            console.log("Error al ver detalle de anuncio",error);
        }
    }


    handleChange = users => {
        this.setState({
            users
        })    
        console.log("user=>",users)
    };

    selectHour = async (e) =>{
        this.setState({selected: e.target.id});
        console.log(e.target.id)
    }

    selectTypeDiary = async (e) =>{
        if(e.target.value === 'reunion'){
            this.setState({ type: e.target.value})
            console.log(e.target.value)
            this.setState({ hoursOptions: [] });
            this.setState({ isMeet: true });
            this.setState({ isHour: true });
        }else{
            this.setState({ type: e.target.value})
            console.log(e.target.value)
            this.setState({ isMeet: false });
            this.setState({ isHour: true });
            this.setState({hoursOptions: [
                '6:00 am','7:00 am','8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
                '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm',
                '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm','11:00 pm','12:00 am',
            ]});
        }
    }

    saveReminder = async (e) => {
        e.preventDefault();
        let from_user_id = localStorage.getItem('id')
        const {title,date,selected,description,type} = this.state
        console.log(type)
        let time = selected
        const formData = {
            title: title, date: moment(date).format('YYYY-MM-DD'),time: time,description: description,type: type,from_user_id: from_user_id
        }

        const res = await this.props.appointmentsUser(from_user_id,formData);
        console.log("RESPUESTA RECORDATORIO =>", res)
        $('#newdiary').modal('hide')
        this.props.listReminders(1)
        console.log(formData)
    }

    saveMeeting = async (e) => {
        e.preventDefault();
        console.log('Hola');
        
        const { title,description } = this.state

        const formData = {
            title, description 
        }

        console.log(formData)

    }

    onChange = date => this.setState({ date })

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
            users,
        } = this.state;

        return (
            <View
                // value={selectedOption}
                title = {title}
                date = {date}
                time = {time}
                saveReminder = {this.saveReminder}
                description = {description}
                onChange={this.onChange}
                className="basic-single"
                contactoClassNamePrefix="contacto"
                contactoPlaceholder = "contacto ..."
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                handleChange = {this.handleChange}
                hoursOptions={hoursOptions}
                selectHour={this.selectHour}
                options = {users}
                selected={selected}
                // onChange_={this.handleChange}
                handleInputChange= {this.handleInputChange}
                selectTypeDiary = {this.selectTypeDiary}
                isMeet={isMeet}
                isHour={isHour}
                saveMeeting={this.saveMeeting}
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
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalDiary)
)

