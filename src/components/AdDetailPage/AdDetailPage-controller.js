
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import View from './AdDetailPage-view';

class AdDetailPage extends React.Component {
    render() {
        console.log("AD TYPE",this.props.adType);
        const {
            adType
        } = this.props
        return (
            <View
            adType={adType}
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