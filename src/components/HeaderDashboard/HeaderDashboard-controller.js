
import React from 'react';
import View from './HeaderDashboard-view';
import $ from 'jquery'

class HeaderDashboard extends React.Component {

    state = {
        name: localStorage.getItem('name'),
        lastname: localStorage.getItem('lastname')
    }

    componentDidMount = () => {
        $('.navbar-toggler').on('click', function () {
            $('html').toggleClass('nav-open');
            $('.opacity-panel').toggleClass('close-layer visible')
        })
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
