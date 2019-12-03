
import React from 'react';
import View from './Events-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getEventType from '../../redux/actions/getEventType';
class Events extends React.Component {
    handleClick = (type) => {
        this.props.getEventType(type)
    }
    render() {
        const {
            eventType
        } = this.props
        return (
            <View
            eventType={eventType}
            handleClick={this.handleClick}
            />
        );
    }
}
const mapStateToProps = state => ({
    eventType: state.getEventTypeReducer
});
const mapDispatchToProps = {
    getEventType
}
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Events)
)
