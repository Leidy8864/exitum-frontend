
import React from 'react';
import View from './AssistButton-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { assistEvent } from '../../redux/actions';
import { decodeToken } from '../../libs/helper';
import reloadPage from '../../redux/actions/reloadPage';

class AssistButton extends React.Component {

    handleAssistEvent = async (event_id) => {
        try {

            const result = decodeToken();
            const formData = {
                user_id: result.id,
                event_id : this.props.event_id
            }
            const response = await assistEvent(formData);
            // console.log("response",response);
            if (response.status) {
                this.props.reloadPage(1);
            }
        } catch (error) {
            console.log("Error a la hora de asistir evento", error);
        }

    }
    render() {
        const {isPart,event_id} = this.props;
        return (
            <View
            isPart={isPart}
            event_id={event_id}
            handleAssistEvent={this.handleAssistEvent}
            />
        );
    }
}

const mapDispatchToProps = {
    reloadPage
};
export default withRouter(
    connect(null, mapDispatchToProps)(AssistButton)
)