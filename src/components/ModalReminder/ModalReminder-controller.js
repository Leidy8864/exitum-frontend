
import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { appointmentsUpdate } from '../../redux/actions'
import View from './ModalReminder-view';

class ModalReminder extends React.Component {

    state = {
        id: '',
        from_user_id: '',
        to_user_id: '',
        date: '',
        title: '',
        time: '',
        description: ''
    }

    handleChange = (e) => {
        const value = e.target.value.trim();
        this.setState({
            [e.target.name]: value
        });
    }

    componentWillReceiveProps(nextProps, nextState){

        const {id,from_user_id,to_user_id, date,title,time,description} = nextProps.getReminderReducer;
        console.log(from_user_id)
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

    updateReminder = async e => {
        e.preventDefault();
        
        
        const { from_user_id,to_user_id,id,description,date } = this.state 

        const data = {
            from_user_id,
            to_user_id,
            description,
            date
        }

        console.log(data)

         const res = await this.props.appointmentsUpdate(id,data)
         console.log(res)

    }

    render() {

        const { date,description,time, title } = this.state 

        return (
            <View
                handleChange={this.handleChange}
                updateReminder = {this.updateReminder}
                date= {date}
                description = {description}
                time= {time}
                title= {title}
            />
        );
    }
}

const mapStateToProps = (state) => ({    
    getReminderReducer: state.getReminderReducer,
});


const mapDispatchToProps = {
    appointmentsUpdate
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalReminder)
)
