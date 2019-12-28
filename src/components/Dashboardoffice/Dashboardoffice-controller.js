
import React from 'react';
import View from './Dashboardoffice-view';
import $ from 'jquery'
import Diary from '../Diary/Diary-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import Sidebar from '../Sidebar/Sidebar-controller'
import Tree from '../Tree/Tree-controller'
import Cherry from '../Cherry/Cherry-controller'

class Dashboardoffice extends React.Component {

    state = {
        role: localStorage.getItem('role') || 'undefined',
        confirmed : localStorage.getItem('confirmed') || 'false'
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

export default Dashboardoffice;
