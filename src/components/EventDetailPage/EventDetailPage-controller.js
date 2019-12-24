
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import View from './EventDetailPage-view';
import { showEvent, downloadListParticipants, root } from '../../redux/actions';
import getEvent from '../../redux/actions/getEvent';
import reloadPage from '../../redux/actions/reloadPage';
import { decodeToken } from '../../libs/helper';

class EventDetailPage extends React.Component {
    state={
        user_id : '',
        event : {
            toWorkshopCategories : []
        },
        isPart : false
    }
    componentDidMount(){
            this.getDataEvent();
    }
    componentDidUpdate(nextProps){
        const {reload } = this.props;

        if (nextProps.reload !== reload) {
            if (reload) {                
                this.getDataEvent();
                this.props.reloadPage(0);
            }
        }
    }

    async getDataEvent(){
        try {
            
            const event_id = this.props.match.params.id;
            const response = await showEvent(event_id);
            const result = decodeToken();  //toWorkshopUsers
            const participant = response.data.toWorkshopUsers.find(participant => participant.id === result.id);
            this.setState({
                user_id : result.id,
                event : response.status ? response.data : [],
                isPart : participant ? true : false
            });
        } catch (error) {
            console.log("Error al ver detalle de evento",error);
        }

    }

    handleOpenEditModal = () => {
        const {event} = this.state;
        this.props.getEvent(event);
        
    }
    handleDownloadParticipants = async (event_id,e) => {
        e.preventDefault();
        var a = document.createElement("a");
        a.href = root + 'events/downloadParticipants/' + event_id;
        a.target = "_blank";
        a.click()    
    }
    render() {
        const{
          user_id,
          event,
          isPart
        } = 
        this.state;
        return (
            <View
            event={event}
            isPart={isPart}
            user_id = {user_id}
            handleOpenEditModal={this.handleOpenEditModal}
            handleDownloadParticipants={this.handleDownloadParticipants}
            />
        );
    }
}
const mapStateToProps = state => ({
    reload: state.reloadPageReducer
});
const mapDispatchToProps = {
    getEvent,
    reloadPage
}
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EventDetailPage)
)