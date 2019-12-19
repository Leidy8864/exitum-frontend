
import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import View from './ModalMeet-view';
import getMeet from '../../redux/actions/get-meet'
import { listUsers, hourAvailables } from '../../redux/actions'
import moment from 'moment'
import $ from 'jquery'
import Swal from 'sweetalert2'


class ModalMeet extends React.Component {

    state = {
        id:'',
        title: '',
        from_user_id:'',
        to_user_id: '',
        date: '',
        time: '',
        description: '',
        isMeet: true,
        users: [],
        contact: '',
        hoursOptions: [],
        hourAvailables: [],
    }
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
            console.log("Error al ver detalle de anuncio",error);
        }
    }

    handleChangeForm = (e) => {
        const value = e.target.value.trim();
        this.setState({
            [e.target.name]: value
        });
    }

    handleChange = async (selectedOption) => {
        this.setState({ selectedOption})
        console.log(selectedOption)
        const data = {
            date: moment(this.state.date).format('YYYY-MM-DD')
        }
        
        const hourAvailables = await this.props.hourAvailables(selectedOption.value,data);
        this.setState({hourAvailables})
        this.setState({to_user_id: selectedOption.value})
        this.setState({contact: selectedOption})
    };

    async componentDidUpdate(nextProps){

        const  { meeting } = this.props
        if(nextProps.meeting !== meeting){
            if(meeting) {
                $('#updatemeet').on('hidden.bs.modal', () => {
                    this.props.getMeet(null)
                });

                const hourAvailables = await this.props.hourAvailables(meeting.toAppointmentUser.id,{ date: meeting.date })
                
                this.setState ({
                    id: meeting.id,
                    title : meeting.title,
                    description:  meeting.description,
                    date: meeting.date,
                    time : meeting.time,
                    from_user_id: meeting.from_user_id,
                    selectedOption: { label: meeting.toAppointmentUser.fullname, value: meeting.toAppointmentUser.id},
                    to_user_id: meeting.to_user_id,
                    hourAvailables : hourAvailables
                })
            }
        }
     }

     selectHour = async (e) =>{
        this.setState({selected: e.target.id,time :e.target.id });
    }

     updateMeet = async e => {
         e.preventDefault();

         const { from_user_id,to_user_id,id,description,date,title,selected } = this.state 

         let time = selected

        const data = {
            from_user_id,
            to_user_id,
            description,
            date,
            title,
            time
        }
            console.log(time)
            console.log("REMINDER DATA",data)
            
            const res = await this.props.appointmentsUpdate(id,data)

            if(res.status == true) {
                Swal.fire(
                    'Buen trabajo',
                    'Actualizado correctamente',
                    'success'
                )
            } else {
                Swal.fire({
                    type: 'error',
                    text: 'Ya hay una hora reservada para esta reunión, elije una hora disponible',
                })
            }
     }


    render() {

        var {
            title,
            date,
            time,
            description,
            isMeet,
            users,
            hourAvailables,
            to_user_id,
            contact,
            selectedOption
        } = this.state

        return (
            <View
                handleChangeForm = {this.handleChangeForm}
                handleChange = {this.handleChange}
                isMeet = {isMeet}
                title = {title}
                date = {date}
                time = {time}
                description = {description}
                to_user_id = {to_user_id}
                contact = {contact}
                options = {users}
                hourAvailables = {hourAvailables}
                updateMeet = {this.updateMeet}
                selectedOption={selectedOption}
                onChange={this.onChange}
            />
        );
    }
}

const mapStateToProps = (state) => ({    
    meeting: state.getMeetReducer,
});


const mapDispatchToProps = {
    getMeet,
    hourAvailables
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalMeet)
)

