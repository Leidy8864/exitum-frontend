
import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import View from './ModalMeet-view';
import getMeet from '../../redux/actions/get-meet'
import { appointmentsUser, listUsers, hourAvailables } from '../../redux/actions'
import moment from 'moment'
import $ from 'jquery'

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
        
        const data = {
            date: moment(this.state.date).format('YYYY-MM-DD')
        }
        
        const hourAvailables = await this.props.hourAvailables(selectedOption.value,data);
        this.setState({hourAvailables})
        this.setState({to_user_id: selectedOption.value})
    };

    componentDidUpdate(nextProps){

        const  { meeting } = this.props

        if(nextProps.meeting !== meeting){
            if(meeting) {
                $('#updatemeet').on('hidden.bs.modal', () => {
                    this.props.getMeet(null)
                });

                this.setState ({
                    id: meeting.id,
                    title : meeting.title,
                    description:  meeting.description,
                    date: meeting.date,
                    time : meeting.time
                })

            }
        }
     }

    render() {

        const { meeting } = this.props
        console.log(meeting)

        var {
            title,
            date,
            time,
            description,
            isMeet,
            users,
            hourAvailables,
        } = this.state

        console.log(description)

        return (
            <View
                handleChangeForm = {this.handleChangeForm}
                handleChange = {this.handleChange}
                isMeet = {isMeet}
                title = {title}
                date = {date}
                time = {time}
                description = {description}
                options = {users}
                hourAvailables = {hourAvailables}
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

