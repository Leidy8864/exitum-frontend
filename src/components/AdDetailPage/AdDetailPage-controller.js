
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import View from './AdDetailPage-view';
import { getAdDetail } from '../../redux/actions';

class AdDetailPage extends React.Component {

    state={
        advertisement : {
            area : {},
            startup : {},
            skills : []
        }
    }
    async componentDidMount(){
        try {
            const advert_id = this.props.match.params.id;
            const advertisement = await getAdDetail(advert_id);
            console.log("advertisement",advertisement);
            this.setState({
                advertisement : advertisement
            });
        } catch (error) {
            console.log("Error al ver detalle de anuncio",error);
        }
    }
    render() {
        return (
            <View
            advertisement={this.state.advertisement}
            />
        );
    }
}
const mapStateToProps = state => ({
    adType: state.getTypeAdsReducer
});
export default withRouter(
    connect(mapStateToProps, null)(AdDetailPage)
)