
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
        timePaint : '',
        description: '',
        selected : "",
        hoursOptions: [
            '06:00 AM','07:00 AM','08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
            '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
            '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM','11:00 PM','12:00 AM',
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

        const {id,from_user_id,to_user_id, date,title,time,description} = nextProps.reminders;

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
        this.setState({selected: e.target.id,time :e.target.id });
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
        console.log(time)
        console.log("REMINDER DATA",data)

        //  const res = await this.props.appointmentsUpdate(id,data)
        //  console.log(res)
        //  this.props.listReminders(1)
        //  $('#updateReminder').modal('hide')
        //  console.log(res)

    }

    render() {

        const { date,description,time,timePaint, title,hoursOptions,selected,isHour } = this.state 
        const { reminders } = this.props
        console.log(reminders)

        return (
            <View
                handleChange={this.handleChange}
                updateReminder = {this.updateReminder}
                date= {date}
                selected = {selected}
                description = {description}
                time= {time}
                title= {title}
                timePaint = {timePaint}
                hoursOptions ={hoursOptions}
                selectTypeDiary ={ this.selectTypeDiary } 
                selectHour = {this.selectHour}
                isHour = { isHour}
            />
        );
    }
}

const mapStateToProps = (state) => ({    
    reminders: state.getReminderReducer,
});


const mapDispatchToProps = {
    appointmentsUpdate,
    listReminders
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalReminder)
)
