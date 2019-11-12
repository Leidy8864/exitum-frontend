
import React from 'react';
import View from './EmployeesList-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listProposalByAdvert, listRecommendationByAdvert, addFavoriteEmployee, listEmployeesFavorites } from '../../redux/actions';
import $ from 'jquery';
class EmployeesList extends React.Component {
    state = {
        employeesList: [],
        advertisement_id: 0,
        pages: 1
    }
    async componentDidUpdate(nextProps) {

        const { adType } = this.props;
        if (nextProps.adType !== adType) {
            if (adType) {
                try {
                    const advert_id = this.props.match.params.id;
                    const data = {
                        advertisement_id: advert_id
                    }
                    const response = await this.getListEmployees(adType, data);
                    console.log("RESPONSE", response);

                    if (response) {
                        this.paginationData(adType, response.pages); //Permite la paginacion por scroll

                        this.setState({
                            pages: response.pages,
                            advertisement_id: advert_id,
                            employeesList: response.employeesList.length >= 1 ? response.employeesList : []
                        });
                    }

                } catch (error) {
                    console.error("Error al litar ads");
                }
            }
        }
    }

    getListEmployees = async (adType, data) => {
        try {
            var response = null;
            var employeesList = [];

            switch (adType) {
                case "postulation":
                    response = await listProposalByAdvert(data);
                    employeesList = response.data.map(employee => ({
                        user_id: employee.user_id,
                        short_description: employee.short_description,
                        name: employee.user.name + " " + employee.user.lastname,
                        photo : employee.user.photo,
                        price_hour: employee.price_hour,
                        avg_rating: employee.user.avg_rating,
                        saved: employee.invitations.length > 0 ? employee.invitations[0].saved : 0
                    }));
                    break;
                case "coincidence":
                    response = await listRecommendationByAdvert(data);
                    employeesList = response.data.map(user => ({
                        user_id: user.id,
                        short_description: user.employee.short_description,
                        name: user.name + " " + user.lastname,
                        photo : user.photo,
                        price_hour: user.employee.price_hour,
                        avg_rating: user.avg_rating,
                        saved: user.employee.invitations.length > 0 ? user.employee.invitations[0].saved : 0

                    }));
                    break;
                case "favorite":
                    console.log("FAVORITE");

                    response = await listEmployeesFavorites(data);
                    employeesList = response.data.map(favorite => ({
                        user_id: favorite.employee.user_id,
                        short_description: favorite.employee.short_description,
                        name: favorite.employee.user.name + " " + favorite.employee.user.lastname,
                        photo : favorite.employee.user.photo,
                        price_hour: favorite.employee.price_hour,
                        avg_rating: favorite.employee.user.avg_rating,
                        saved: favorite.saved
                    }));
                    break;
                default:
                    break;
            }
            console.log("response data",response);
            
            const pages = response.status ? response.pages : 1;
            return { pages, employeesList };
        } catch (error) {
            console.error("Error al litar ads", error);
        }
    }
    paginationData = async (adType, pages) => {
        var page = 1;
        var response = null;
        var employeesList = [];

        $('#list-employees').on('scroll', async () => {
            if ($('#list-employees').scrollTop() +
                $('#list-employees').innerHeight() >=
                $('#list-employees')[0].scrollHeight) {

                page = page + 1;

                console.log("PAGE", page);
                console.log("PAGES", pages);

                if (page <= pages) {
                    console.log("paso");

                    try {
                        const data = {
                            advertisement_id: this.props.match.params.id,
                            page: page
                        }
                        response = await this.getListEmployees(adType, data)

                        employeesList = response.employeesList;
                        if (employeesList.length > 0) {
                            var newArray = Object.assign([], this.state.employeesList);

                            for (let index = 0; index < employeesList.length; index++) {
                                newArray.push(employeesList[index]);
                            }
                            this.setState({
                                employeesList: newArray
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
                if (this.props.adType === "favorite") {
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
