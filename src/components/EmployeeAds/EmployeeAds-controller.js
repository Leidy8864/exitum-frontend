
import React from 'react';
import View from './EmployeeAds-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listAdsBySkills, listPostulations } from '../../redux/actions';
import getListAds from '../../redux/actions/getListAds';
import $ from 'jquery';
import getAdvert from '../../redux/actions/getAdvert';
import reloadPage from '../../redux/actions/reloadPage';

const data = {
    user_id: localStorage.getItem('id')
};
class EmployeeAds extends React.Component {
    state = {
        adsList: []
    }

    componentDidMount() {        
        this.getEmployeeAds("coincidence");
    }
    componentDidUpdate(nextProps) {

        const { adType, reload } = this.props;
        if (nextProps.adType !== adType) {
            if (adType) {
                this.getEmployeeAds(adType)
            }
        }
        if (nextProps.reload !== reload) {
            console.log("reloading in employees");
            
            if (reload) {
                this.getEmployeeAds(adType)
                this.props.reloadPage(0);
            }
        }
    }

    async getEmployeeAds(adType){
        try {
            var response = "";
            if (adType === "coincidence") {
                response = await listAdsBySkills(data);
            } else {
                response = await listPostulations(data);
            }

            console.log('employee ads',response);
            
            const pages = response.status ? response.pages : 1;
            this.paginationData(adType, pages); //Permite la paginacion por scroll
            this.setState({
                pages: pages,
                adsList: response.status ? response.data : []
            });   
        } catch (error) {
            console.error("Error al litar ads for employees", error);
        }
    }
    paginationData(adType, pages) {
        var page = 1;
        var adsList = "";
        $('#employee-ads').on('scroll', async () => {
            if ($('#employee-ads').scrollTop() +
                $('#employee-ads').innerHeight() >=
                $('#employee-ads')[0].scrollHeight) {

                page = page + 1;

                console.log("PAGE", page);

                const data = {
                    user_id: localStorage.getItem('id'),
                    page: page
                }

                if (page <= pages) {

                    adType === "coincidence" ? adsList = await listAdsBySkills(data)
                        : adsList = await listPostulations(data);

                    console.log("AD LIST", adsList);

                    const arrayList = adsList.data;

                    if (arrayList.length > 0) {
                        var newArray = Object.assign([], this.state.adsList);

                        for (let index = 0; index < arrayList.length; index++) {
                            newArray.push(arrayList[index]);
                        }
                        this.props.getListAds(newArray);

                        this.setState({
                            adsList: newArray
                        });
                    }
                }

            }
        });
    }
    handleSetAdId = (id) => {
        console.log("AD ID", id);

        const { adsList } = this.state;
        const advert = adsList.find(advert => { return advert.id === id });
        this.props.getAdvert(advert); //Guarda el objeto de anuncio en redux
    }
    render() {
        return (
            <View
                userRole={this.props.userRole}
                adsList={this.state.adsList}
                handleSetAdId={this.handleSetAdId}
            />
        );
    }
}
const mapStateToProps = state => ({
    adType: state.getTypeAdsReducer,
    reload: state.reloadPageReducer
});
const mapDispatchToProps = {
    getAdvert,
    getListAds,
    reloadPage
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EmployeeAds)
)

