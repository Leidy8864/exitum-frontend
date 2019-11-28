
import React from 'react';
import View from './EmployeesList-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listProposalByAdvert, listRecommendationByAdvert, addFavoriteEmployee, listEmployeesFavorites } from '../../redux/actions';
import $ from 'jquery';


const listAdTypes = ["coincidence", "postulation", "favorite"];

class EmployeesList extends React.Component {
    state = {
        advertisement_id: 0,
        employeesList: [],
        advertisement_id: 0,
        pages: 1
    }

    async componentDidMount() {
        const advert_id = this.props.match.params.id // Recupera el id de la anuncio de la ruta;
        const data = {
            advertisement_id: advert_id
        }
        const response = await this.getListEmployees(listAdTypes[0], data) //Llama a la funcion que consulta los empleados;

        if (response) {
            this.paginationData(listAdTypes[0], response.pages); //Permite la paginacion por scroll
            this.setDataInState(response, advert_id) // Guarda la informacio en el state
        }
    }
    async componentDidUpdate(nextProps) {

        const { adType } = this.props;
        if (nextProps.adType !== adType) {
            if (adType) {                
                try {
                    const { advertisement_id } = this.state;
                    const data = {
                        advertisement_id: advertisement_id
                    }
                    const response = await this.getListEmployees(adType, data);  //Llama a la funcion que consulta los empleados;
                    if (response) {
                        this.paginationData(adType, response.pages); //Permite la paginacion por scroll
                        this.setDataInState(response, advertisement_id) // Guarda la informacio en el state
                    }
                } catch (error) {
                    console.error("Error al litar ads", error);
                }
            }
        }
    }
    //Función encargada de consultar la lista de empleados por tipo
    getListEmployees = async (adType, data) => {
        try {
            var response = null;
            var employeesList = [];

            switch (adType) {
                case listAdTypes[0]:
                    response = await listRecommendationByAdvert(data);
                    employeesList = response.data.map(user => ({
                        user_id: user.id,
                        short_description: user.employee.short_description,
                        name: user.name + " " + user.lastname,
                        photo: user.photo,
                        price_hour: user.employee.price_hour,
                        avg_rating: user.avg_rating,
                        saved: user.employee.invitations.length > 0 ? user.employee.invitations[0].saved : 0

                    }));
                    break;
                case listAdTypes[1]:
                    response = await listProposalByAdvert(data);
                    employeesList = response.data.map(employee => ({
                        user_id: employee.user_id,
                        short_description: employee.short_description,
                        name: employee.user.name + " " + employee.user.lastname,
                        photo: employee.user.photo,
                        price_hour: employee.price_hour,
                        avg_rating: employee.user.avg_rating,
                        saved: employee.invitations.length > 0 ? employee.invitations[0].saved : 0
                    }));
                    break;
                case listAdTypes[2]:
                    response = await listEmployeesFavorites(data);
                    employeesList = response.data.map(favorite => ({
                        user_id: favorite.employee.user_id,
                        short_description: favorite.employee.short_description,
                        name: favorite.employee.user.name + " " + favorite.employee.user.lastname,
                        photo: favorite.employee.user.photo,
                        price_hour: favorite.employee.price_hour,
                        avg_rating: favorite.employee.user.avg_rating,
                        saved: favorite.saved
                    }));
                    break;
                default:
                    break;
            }
            const pages = response.status ? response.pages : 1;

            return { pages, employeesList };
        } catch (error) {
            console.error("Error al litar ads", error);
        }
    }
    //Funcion encargada de guardar información en el state
    setDataInState(response, advert_id) {
        this.setState({
            pages: response.pages,
            advertisement_id: advert_id,
            employeesList: response.employeesList.length >= 1 ? response.employeesList : []
        });
    }
    //Función encargada de paginar la lista de empleados por tipo
    paginationData = async (adType, pages) => {
        var page = 1;
        var response = null;
        var employeesList = [];

        $('#list-employees').on('scroll', async () => {
            if ($('#list-employees').scrollTop() +
                $('#list-employees').innerHeight() >=
                $('#list-employees')[0].scrollHeight) {

                page = page + 1;

                if (page <= pages) {
                    try {
                        const { advertisement_id } = this.state;
                        const data = {
                            advertisement_id: advertisement_id,
                            page: page
                        }
                        response = await this.getListEmployees(adType, data);  //Llama a la funcion que consulta los empleados;

                        employeesList = response.employeesList;
                        if (employeesList.length > 0) {
                            var newArray = Object.assign([], this.state.employeesList); //Hace una copia del la lista de empleados hasta antes la paginacion

                            for (let index = 0; index < employeesList.length; index++) {
                                newArray.push(employeesList[index]);
                            }
                            this.setState({
                                employeesList: newArray //Guardamos el nuevo array en el state
                            });
                        }
                    } catch (error) {
                        console.log("ERROR INTENTANDO PAGINAR DATA", error);
                    }
                }

            }
        });
    }
    handleLikeEmployee = async (saved, user_id, e) => {
        e.preventDefault();
        try {
            const { advertisement_id, employeesList } = this.state;
            const formData = {
                user_id,
                advertisement_id,
                saved
            }
            const response = await addFavoriteEmployee(formData);
            if (response.status) {
                const listEmployees = Object.assign([], employeesList);
                const index = listEmployees.findIndex((employee) => employee.user_id === user_id);

                listEmployees[index].saved = saved;
                if (this.props.adType === listAdTypes[2]) {
                    listEmployees.splice(index, 1)
                }
                this.setState({
                    employeesList: listEmployees
                });
            }
        } catch (error) {
            console.log("ERROR AGREGANDO FAVORITOS", error);

        }
    }
    render() {

        const {
            employeesList
        } = this.state;
        return (
            <View
                employeesList={employeesList}
                handleLikeEmployee={this.handleLikeEmployee}
            />
        );
    }
}

const mapStateToProps = state => ({
    adType: state.getTypeAdsReducer
});

export default withRouter(
    connect(mapStateToProps, null)(EmployeesList)
)
