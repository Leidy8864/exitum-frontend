
import React from 'react';
import View from './Dashboardoffice-view';
import $ from 'jquery'
import Diary from '../Diary/Diary-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import Sidebar from '../Sidebar/Sidebar-controller'
import Tree from '../Tree/Tree-controller'
import Cherry from '../Cherry/Cherry-controller'
import Swal from 'sweetalert2'
import { challengeNotification } from '../../redux/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import showNotification from '../../redux/actions/showNotification';
import moment from 'moment';


class Dashboardoffice extends React.Component {

    state = {
        role: localStorage.getItem('role') || 'undefined',
        confirmed: localStorage.getItem('confirmed') || 'false'
    }

    async componentDidMount() {        
        const response = await challengeNotification(localStorage.getItem('id'));        
        if (response.status) {
            if (this.props.show) {
                let modals = [];
                let notifications = response.data;
                if (notifications.length > 0) {
                    
                    for (let index = 0; index < notifications.length; index++) {    
                        let date_max = moment(notifications[index].date_max);
                        let date_now = moment(new Date());
                        let hours = date_max.diff(date_now,'hours');
                        let text = notifications[index].startup ? `de la Startup "${notifications[index].startup.name}"` : '';
                        let role = notifications[index].startup ? 'emprendedor' : 'impulsor';                        
                        modals.push({
                            position: 'top-end',
                            type: 'info',
                            text: `Bienvenido ${role}, recuerde que tiene ${hours} horas para completar el reto "${notifications[index].tip.tip}" ${text}`,
                            showConfirmButton: true,
                            showCloseButton: false
                        })
                        
                    }                    
                    Swal.queue(modals) // Cola de sweet alert
                }
                this.props.showNotification(0);
            }
        }
    }

    pickDiary = e => {
        e.preventDefault();
        $('.modal-backdrop.show').removeClass('modal-backdrop');
    }

    render() {
        let content =

            <div className="dashboard">
                <Sidebar />
                <main className="main-panel">
                    <HeaderDashboard />
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-9 col-lg-12 events-fluid">
                                    <Tree />
                                    <Cherry />
                                </div>
                                <div className="col-xl-3 col-lg-12 content-diary">
                                    <Diary />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        if (this.state.role === 'undefined' || this.state.confirmed === "false") {
            content =
                <div className="container-undefined">
                    <Tree />
                </div>
        }

        return (
            <View
                pickDiary={this.pickDiary}
                content={content}
            />
        );
    }
}
const mapStateToProps = (state) => ({
    show: state.showNotificationReducer,
    reloadPage: state.reloadPageReducer

});
const mapDispatchToProps = {
    showNotification
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Dashboardoffice)
)