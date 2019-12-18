
import React from 'react';
import View from './ModalEvents-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listCategories, createEvent, editEvent } from '../../redux/actions';
import moment from 'moment';
import { decodeToken } from '../../libs/helper';
import reloadPage from '../../redux/actions/reloadPage';
import getEvent from '../../redux/actions/getEvent';
import $ from 'jquery';


class ModalEvents extends React.Component {
    state = {
        title: '',
        description: '',
        place: '',
        
        hour_start: '',
        categoryOptions: [],
        categories: [],
        day: new Date(),
        event_id : 0
    }
    async componentDidMount() {
        const categoriesData = await listCategories();
        var categories = [];

        if (categoriesData.length > 0) {
            categories = categoriesData.map(x => ({ label: x.name, value: x.id }));
        }

        this.setState({
            categoryOptions: categories
        });
    }
    componentDidUpdate(nextProps) {
        const { event } = this.props;
        if (nextProps.event !== event) {
            if (event) {
                $('#EventsModal').on('hidden.bs.modal', () => {
                    this.props.getEvent(null);
                });
                const categories = event.toWorkshopCategories.map(x => ({ label: x.name, value: x.id }));
                this.setState({
                    event_id : event.id,
                    title: event.title,
                    description: event.description,
                    place: event.place,
                    hour_start: event.hour_start,
                    day: new Date(event.day),
                    categories: categories
                });

            }
        }
    }
    cleanErrors = () => {
        this.setState({
            error_title: '',
            error_description: '',
            error_day: '',
            error_hour_start: '',
            error_place: '',
            error_categories: '',
            success_message: '',
            error_message: '',
        });
    }

    cleanState = () => {
        this.setState({
            title: '',
            description: '',
            place: '',
            hour_start: '',
            categories: [],
            day: new Date()
        });
    }

    handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleDateChange = (date_event) => this.setState({ day: date_event });

    handleSelectChange = (option, action) => this.setState({ [action.name]: option });

    handleSubmit = async (e) => {
        this.cleanErrors();

        e.preventDefault();

        try {
            const { title, description, day, hour_start, place, categories, event_id} = this.state;
            var values = [];

            for (let index = 0; index < categories.length; index++) {
                values.push(categories[index].label)
            }
            const result = decodeToken();
            const date_event = moment(day).format('YYYY-MM-DD');
            const formData = { user_id: result.id, title, description, day: date_event, hour_start, place, categories: values, event_id };
            console.log(formData)
            // if (title && description && day && hour_start && place && categories.length > 0) {
            //     var response = null
            //     if (event_id) {
            //         response = await editEvent(formData);
            //     }else{
            //         response = await createEvent(formData);
            //     }
            //     // console.log("RESPONSE", response);
            //     if (response.status) {
            //         this.setState({ success_message: response.message });
            //         setTimeout(
            //             () => {
            //                 $('#EventsModal').modal('hide');
            //                 this.props.reloadPage(1);
            //                 this.cleanState();
            //                 this.cleanErrors();
                            
            //             },
            //             1500
            //         );
            //     } else {
            //         this.setState({ error_message: response.message });
            //         setTimeout(
            //             () => {
            //                 $('#EventsModal').modal('hide');
            //                 this.cleanState();
            //                 this.cleanErrors();
                            
            //             },
            //             1500
            //         );
            //     }
            // } else {
            //     !title ? this.setState({ error_title: 'Debes ingresar un título' }) : ''
            //     !description ? this.setState({ error_description: 'Debes ingresar una descripción' }) : ''
            //     !day ? this.setState({ error_day: 'Debes elegir una fecha' }) : ''
            //     !hour_start ? this.setState({ error_hour_start: 'Debes elegir una hora' }) : ''
            //     !place ? this.setState({ error_place: 'Debes ingresar el lugar' }) : ''
            //     !categories.length > 0 ? this.setState({ error_categories: 'Debes elegir al menos una categoria' }) : ''
            // }
        } catch (error) {
            console.log("Erorr intentado crear evento");
        }
    }
    render() {
        const {
            error_title,
            error_description,
            error_day,
            error_hour_start,
            error_place,
            error_categories,
            success_message,
            error_message,
            title,
            description,
            day,
            hour_start,
            place,
            categories,
            categoryOptions
        } = this.state;

        let content_message = '';

        if (success_message) {
            content_message = <div className="success-message mt-4"><p className="text-center">{success_message}</p></div>;
        }
        if (error_message) {
            content_message = <div className="error-message mt-4"><p className="text-center">{error_message}</p></div>;
        }

        // $('#EventsModal').on('hidden.bs.modal', () => {
        //     this.cleanErrors()
        // });
        return (
            <View
                handleTimeChange={this.handleTimeChange}
                title={title}
                description={description}
                day={day}
                hour_start={hour_start}
                place={place}
                categories={categories}
                error_title={error_title}
                error_description={error_description}
                error_day={error_day}
                error_hour_start={error_hour_start}
                error_place={error_place}
                error_categories={error_categories}
                content_message={content_message}
                categoryOptions={categoryOptions}
                handleSelectChange={this.handleSelectChange}
                handleInputChange={this.handleInputChange}
                handleDateChange={this.handleDateChange}
                handleSubmit={this.handleSubmit}
            />

        );
    }
}
const mapStateToProps = state => ({
    event: state.getEventReducer
});
const mapDispatchToProps = {
    getEvent,
    reloadPage
}
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalEvents)
)