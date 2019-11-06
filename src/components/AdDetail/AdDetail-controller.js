
import React from 'react';
import View from './AdDetail-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProposal } from '../../redux/actions';
import $ from 'jquery';
class AdDetail extends React.Component {
    state = {
        advertisement_id : 0,
        success_message : '',
        error_message : '',
        advertisement: {
            startup : {},
            area : {},
            skills : []
        }
    }
    async componentDidUpdate(nextProps) {
        const { adId, adsList,adType } = this.props;        
        if (nextProps.adId !== adId) {
            if (adId) {
                try {
                    const advertisement = adsList.find((advertisement) => { return advertisement.id === adId });
                    console.log("ADVERT",advertisement);
                    
                    this.setState({
                        advertisement : advertisement,
                        advertisement_id : adId,
                        adType : adType
                    })
                } catch (error) {
                    console.log("Error al ver detalle de anuncio", error);
                }
            }
        }
    }
    handleClick = async () =>{
        try {
            const advertisement_id = this.state.advertisement_id;
            const user_id = localStorage.getItem('id');
            const formData = {
                advertisement_id : advertisement_id,
                id : user_id
            }
            const response = await createProposal(formData);
            console.log("RESPONSE PROPSAL",response);
            if (response.status) {
                this.setState({
                    success_message : response.message
                });
                setTimeout(
                    () => {
                        $('#adDetail').modal('hide');
                        window.location.reload();
                    },
                    1200
                );
            }else{
                this.setState({
                    success_message : response.message
                });
                setTimeout(
                    () => {
                        $('#adDetail').modal('hide');
                        window.location.reload();
                    },
                    1200
                );
            }  
        } catch (error) {
            console.log("ERROR POSTULANDO A UN ANUNCIO");
            
        }
        
    } 
    render() {
        let success_message = this.state.success_message;
        let error_message = this.state.error_message;
        let content_message = '';

        if (success_message) {
            content_message = <div className="success-message"><p className="text-center">{success_message}</p></div>;
        }
        if (error_message) {
            content_message = <div className="error-message"><p className="text-center">{error_message}</p></div>;
        }
        const {advertisement,adType} = this.state;
        return (
            <View
            handleClick={this.handleClick} 
            advertisement={advertisement}
            adType={adType}
            content_message={content_message}
            />
        );
    }
}
const mapStateToProps = state => ({
    adType : state.getTypeAdsReducer,
    adId: state.getAdIdReducer,
    adsList: state.getListAdsReducer
});
export default withRouter(
    connect(mapStateToProps, null)(AdDetail)
)