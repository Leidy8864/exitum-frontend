
import React from 'react';
import View from './TabAnuncio-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getAdState from '../../redux/actions/getAdState';
import getTypeAds from '../../redux/actions/getTypeAds';
class TabAnuncio extends React.Component {
    componentDidMount() {
        if (this.props.userRole === "entrepreneur") {
            this.props.getAdState("active");
        } else {
            this.props.getTypeAds("coincidence");
        }
    }
    handleSetState = (state) => {
        this.props.getAdState(state);
    }

    handleSetAdType = (adType) => {
        this.props.getTypeAds(adType);
    }
    render() {

        const {
            adState,
            userRole,
            adType
        } = this.props;
        return (
            <View
                adState={adState}
                adType={adType}
                userRole={userRole}
                handleSetAdType={this.handleSetAdType}
                handleSetState={this.handleSetState}
            />
        );
    }

}

const mapStateToProps = state => ({
    adState: state.getAdStateReducer,
    adType: state.getTypeAdsReducer
});
const mapDispatchToProps = {
    getAdState,
    getTypeAds
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TabAnuncio)
)