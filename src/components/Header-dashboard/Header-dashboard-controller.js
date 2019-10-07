
import React from 'react';
import View from './Header-dashboard-view';

class HeaderDashboard extends React.Component {
    state = {
        name: localStorage.getItem('name'),
        lastname: localStorage.getItem('lastname')
    }

    render() {
        const photo = '';
        return (
            <View
            name={this.state.name}
            lastname={this.state.lastname}
            photo={photo}
            />
        );
    }
}
export default HeaderDashboard;
