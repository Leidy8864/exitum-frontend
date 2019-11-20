
import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { appointmentsUpdate } from '../../redux/actions'
import listReminders from '../../redux/actions/list-reminders'
import View from './ModalReminder-view';
import $ from 'jquery'


class ModalReminder extends React.Component {

    state = {
        id: '',
        from_user_id: '',
        to_user_id: '',
        date: '',
        title: '',
        time: '',
        description: '',
        selected : "",
        hoursOptions: [
            '6:00 am','7:00 am','8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
            '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm',
            '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm','11:00 pm','12:00 am',
        ],
        isHour: false
    }

    handleChange = (e) => {
        const value = e.target.value.trim();
        this.setState({
            [e.target.name]: value
        });
    }

    componentWillReceiveProps(nextProps, nextState){

        const {id,from_user_id,to_user_id, date,title,time,description} = nextProps.getReminderReducer;

        this.setState({
            id,
            from_user_id,
            to_user_id,
            date,
            title,
            time,
            description
        });

     }

     selectHour = async (e) =>{
        this.setState({selected: e.target.id});
        console.log(e.target.id)
    }

    updateReminder = async e => {
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

        console.log(data)

         const res = await this.props.appointmentsUpdate(id,data)
         console.log(res)
         this.props.listReminders(1)
         $('#updateReminder').modal('hide')
         console.log(res)

    }

    render() {

        const { date,description,time, title,hoursOptions,selected,isHour } = this.state 

        return (
            <View
                handleChange={this.handleChange}
                updateReminder = {this.updateReminder}
                date= {date}
                selected = {selected}
                description = {description}
                time= {time}
                title= {title}
                hoursOptions ={hoursOptions}
                selectTypeDiary ={ this.selectTypeDiary } 
                selectHour = {this.selectHour}
                isHour = { isHour}
            />
        );
    }
}

const mapStateToProps = (state) => ({    
    getReminderReducer: state.getReminderReducer,
});


const mapDispatchToProps = {
    appointmentsUpdate,
    listReminders
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalReminder)
)
