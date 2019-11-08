
import React from 'react';
import View from './EmployeesList-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listProposalByAdvert, listRecommendationByAdvert } from '../../redux/actions';

class EmployeesList extends React.Component {
    state = {
        employeesList: []
    }
    async componentDidMount() {
        this.getListEmployees('postulation');
    }
    async componentDidUpdate(nextProps) {

        const { adType } = this.props;
        if (nextProps.adType !== adType) {
            if (adType) {
                try {

                    this.getListEmployees(adType)
                    // var response = "";
                    // if (adType === "coincidence") {
                    //     response = await listProposalByAdvert(data);
                    // } else {
                    //     response = await listPostulations(data);
                    // }                    
                    // this.props.getListAds(response.data); //Guarda la lista de anuncios en redux
                    // const pages = response.status ?  response.pages : 1;
                    // this.paginationData(adType,pages); //Permite la paginacion por scroll
                    // this.setState({
                    //     pages : pages,
                    //     adsList: response.status ? response.data : []
                    // });
                } catch (error) {
                    console.error("Error al litar ads");
                }
            }
        }
    }

    getListEmployees = async (adType) => {
        try {
            const advert_id = this.props.match.params.id;
            const data = {
                advertisement_id: advert_id,
            }
            var response = null;
            var employeesList = [];

            if (adType === "postulation") {
                response = await listProposalByAdvert(data);
                employeesList = response.data.map(employee => ({
                    short_description: employee.short_description,
                    name: employee.user.name + " " + employee.user.lastname,
                    price_hour: employee.price_hour
                }));
                console.log("NEW ARRAY", employeesList);

            }
            if (adType === "coincidence") {
                response = await listRecommendationByAdvert(data);
                employeesList = response.data.map(user => ({
                    short_description: user.employee.short_description,
                    name: user.name + " " + user.lastname,
                    price_hour: user.employee.price_hour
                }));
            }

            if (employeesList.length >= 1) {
                const pages = response.status ? response.pages : 1;
                // this.paginationAds(data.state,pages); //Función para paginar anuncios            
                this.setState({
                    pages: pages,
                    employeesList: response.status ? employeesList : []
                });
            }
            return employeesList;
        } catch (error) {
            console.error("Error al litar ads",error);
        }
    }

    render() {

        const {
            employeesList
        } = this.state;
        return (
            <View
                employeesList={employeesList}
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
