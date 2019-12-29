
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
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import ReactNotifications from 'react-notifications-component';
import MyNotification from '../MyNotification/MyNotification-controller'
import { updateLastLogin } from '../../libs/helper';
class Dashboardoffice extends React.Component {
    state = {
        role: localStorage.getItem('role') || 'undefined',
        confirmed: localStorage.getItem('confirmed') || 'false'
    }
    async componentDidMount() {
        if (this.props.show) {
            const response = await challengeNotification(localStorage.getItem('id'));
            if (response.status) {
                let notifications = response.data;
                // console.log("NOTIFICACIONS", notifications.length);

                if (notifications.length > 0) {

                    for (let index = 0; index < notifications.length; index++) {
                        let date_max = moment(notifications[index].date_max);
                        let date_now = moment(new Date());
                        let days = date_max.diff(date_now, 'days');
                        let text = notifications[index].startup ? `de la Startup "${notifications[index].startup.name}"` : '';
                        let textDays = `que  ${days > 0 ? 'tiene ' + days + ' días' : 'hoy es el último día'}`
                        let role = notifications[index].startup ? 'emprendedor' : 'impulsor';

                        store.addNotification({
                            content: <MyNotification title={`Hola ${role}`}
                                message={`Recuerde ${textDays} para completar el reto "${notifications[index].tip.tip}" ${text}`} />,   // 👈
                            type: 'default',                         // 'default', 'success', 'info', 'warning'
                            container: 'top-right',                // where to position the notifications
                            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                            dismiss: {
                                duration: 20000
                            }
                        })
                    }
                }
                updateLastLogin();
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
                                    <ReactNotifications />
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