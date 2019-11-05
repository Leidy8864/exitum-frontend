
import React from 'react';
import View from './EmployeeAds-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listAdsBySkills, listPostulations } from '../../redux/actions';
import getAdId from '../../redux/actions/getAdId';
import getListAds from '../../redux/actions/getListAds';
import $ from 'jquery';
const data = {
    user_id: localStorage.getItem('id')
};
class EmployeeAds extends React.Component {
    state = {
        adsList: []
    }
    
    async componentDidUpdate(nextProps) {
        
        const { adType } = this.props;
        if (nextProps.adType !== adType) {
            if (adType) {
                try {
                    var response = "";
                    if (adType === "coincidence") {
                        response = await listAdsBySkills(data);
                    } else {
                        response = await listPostulations(data);
                    }                    
                    this.props.getListAds(response.data); //Guarda la lista de anuncios en redux
                    const pages = response.status ?  response.pages : 1;
                    this.paginationData(adType,pages); //Permite la paginacion por scroll
                    this.setState({
                        pages : pages,
                        adsList: response.status ? response.data : []
                    });
                } catch (error) {
                    console.error("Error al litar ads");
                }
            }
        }
    }
    paginationData (adType,pages){
        var page = 1;
        var adsList = "";
        $('#employee-ads').on('scroll', async () => {
            if ($('#employee-ads').scrollTop() +
                $('#employee-ads').innerHeight() >=
                $('#employee-ads')[0].scrollHeight) {
                
                page = page + 1;

                console.log("PAGE",page);
                
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
        this.props.getAdId(id);
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
    adType: state.getTypeAdsReducer
});
const mapDispatchToProps = {
    getAdId,
    getListAds
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EmployeeAds)
)

