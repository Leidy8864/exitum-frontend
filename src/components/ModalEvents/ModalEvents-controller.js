
import React from 'react';
import View from './ModalEvents-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listCategories, createEvent, editEvent, listCountries, listCitiesByCountry } from '../../redux/actions';
import moment from 'moment';
import { decodeToken } from '../../libs/helper';
import reloadPage from '../../redux/actions/reloadPage';
import getEvent from '../../redux/actions/getEvent';
import $ from 'jquery';
import Swal from 'sweetalert2';


class ModalEvents extends React.Component {
    state = {
        title: '',
        description: '',
        place: '',
        participants: '',
        hour_start: '',
        country: '',
        department: '',
        categoryOptions: [],
        countriesOptions: [],
        citiesOptions: [],
        categories: [],
        photo: null,
        day: new Date(),
        event_id: 0
    }
    async componentDidMount() {
        const categoriesData = await listCategories();
        const countrieData = await listCountries();
        const data = await listCitiesByCountry();
        let cities = [];
        let categories = [];
        let countries = [];
        if (categoriesData.length > 0) {
            categories = categoriesData.map(x => ({ label: x.name, value: x.id }));
        }
        if (countrieData.length > 0) {
            countries = countrieData.map(x => ({ label: x.country, value: x.id }));
        }
        if (data.length > 0) {
            cities = data.map(x => ({ label: x.department, value: x.department }));
        }
        this.setState({
            categoryOptions: categories,
            countriesOptions: countries,
            citiesOptions: cities

        });
    }
    componentDidUpdate(nextProps) {
        const { event } = this.props;
        if (nextProps.event !== event) {
            if (event) {
                $('#EventsModal').on('hidden.bs.modal', () => {
                    this.props.getEvent(null);
                });
                let dateEvent = new Date(moment(event.day).format('LLLL'));
                const categories = event.toWorkshopCategories.map(x => ({ label: x.name, value: x.id }));
                const country = {
                    label: event.department.country.country,
                    value: event.department.country.id
                }
                const department = {
                    label: event.department.department,
                    value: event.department.department
                }
                this.setState({
                    event_id: event.id,
                    title: event.title,
                    description: event.description,
                    participants: event.participants,
                    place: event.place,
                    hour_start: event.hour_start,
                    day: dateEvent,
                    department: department,
                    country: country,
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
            error_participants: '',
            error_place: '',
            error_categories: '',
            success_message: '',
            error_message: '',
            error_department: '',
            error_country: ''
        });
    }

    cleanState = () => {
        this.setState({
            title: '',
            description: '',
            place: '',
            participants: '',
            hour_start: '',
            categories: [],
            department: '',
            country: '',
            day: new Date()
        });
    }

    handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleDateChange = (date_event) => this.setState({ day: date_event });

    handleSelectChange = async (option, action) => {
        if (action.name === "country") {
            const data = await listCitiesByCountry(option.value);
            let cities = [];
            if (data.length > 0) {
                cities = data.map(x => ({ label: x.department, value: x.department }));
            }
            this.setState({
                citiesOptions: cities
            });
        }
        this.setState({ [action.name]: option });
    };

    handleSubmit = async (e) => {
        this.cleanErrors();

        e.preventDefault();

        try {
            const { title, description, day, hour_start, place, participants, categories, event_id, country, department } = this.state;
            // const formData = { user_id: result.id, title, description,participants,photo, day: date_event, hour_start, place, categories: values, event_id };            
            if (title && description && day && hour_start && place && categories) {
                var values = [];

                var formData = new FormData();

                for (let index = 0; index < categories.length; index++) {
                    values.push(categories[index].label)
                    formData.append('categories', categories[index].label);
                }
                const result = decodeToken();
                const date_event = moment(day).format('YYYY-MM-DD');

                formData.append('user_id', result.id);
                formData.append('title', title);
                formData.append('description', description);
                formData.append('participants', participants);
                formData.append('day', date_event);
                formData.append('hour_start', hour_start);
                formData.append('place', place);
                formData.append('country_id', country.value);
                formData.append('department', department.value);

                // formData.append('categories',values);
                formData.append('event_id', event_id);
                formData.append('photo', document.querySelector('#photo_banner').files[0]);
                var response = null
                if (event_id) {
                    response = await editEvent(formData);
                } else {
                    response = await createEvent(formData);
                }
                console.log("RESPONSE", response);
                if (response.status) {
                    this.setState({ success_message: response.message });
                    Swal.fire(
                        'Buen trabajo',
                        'Actualizado correctamente',
                        'success'
                    )
                    setTimeout(
                        () => {
                            $('#EventsModal').modal('hide');
                            this.props.reloadPage(1);
                            this.cleanState();
                            this.cleanErrors();

                        },
                        1500
                    );
                } else {
                    this.setState({ error_message: response.message });
                    setTimeout(
                        () => {
                            $('#EventsModal').modal('hide');
                            this.cleanState();
                            this.cleanErrors();

                        },
                        1500
                    );
                }
            } else {
                !title ? this.setState({ error_title: 'Debes ingresar un título' }) : ''
                !description ? this.setState({ error_description: 'Debes ingresar una descripción' }) : ''
                !day ? this.setState({ error_day: 'Debes elegir una fecha' }) : ''
                !country ? this.setState({ error_country: 'Debes elegir un país' }) : ''
                !department ? this.setState({ error_department: 'Debes elegir una ciudad' }) : ''
                !hour_start ? this.setState({ error_hour_start: 'Debes elegir una hora' }) : ''
                !place ? this.setState({ error_place: 'Debes ingresar la dirección' }) : ''
                !categories ? this.setState({ error_categories: 'Debes elegir al menos una categoria' }) : '',
                !participants ? this.setState({ error_participants: 'Debes ingresar una cantidad de participantes' }) : ''
            }
        } catch (error) {
            console.log("Erorr intentado crear evento =", error);
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
            error_participants,
            error_country,
            error_department,
            success_message,
            error_message,
            title,
            description,
            day,
            participants,
            hour_start,
            place,
            categories,
            categoryOptions,
            countriesOptions,
            citiesOptions,
            department,
            country
        } = this.state;

        let content_message = '';

        if (success_message) {
            content_message = <div className="success-message mt-4"><p className="text-center">{success_message}</p></div>;
        }
        if (error_message) {
            content_message = <div className="error-message mt-4"><p className="text-center">{error_message}</p></div>;
        }

        return (
            <View
                handleTimeChange={this.handleTimeChange}
                title={title}
                description={description}
                day={day}
                participants={participants}
                department={department}
                country={country}
                hour_start={hour_start}
                place={place}
                categories={categories}
                error_title={error_title}
                error_description={error_description}
                error_day={error_day}
                error_participants={error_participants}
                error_hour_start={error_hour_start}
                error_place={error_place}
                error_categories={error_categories}
                error_country={error_country}
                error_department={error_department}
                content_message={content_message}
                categoryOptions={categoryOptions}
                countriesOptions={countriesOptions}
                citiesOptions={citiesOptions}
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