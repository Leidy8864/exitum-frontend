
import React from 'react';
import View from './Header-view';
import $ from 'jquery'

class Header extends React.Component {

    modalLogin = e => {
        e.preventDefault();
        $('body').addClass('bn-login')
        $('input[name=email').val('');
        $('input[name=password').val('');
        $('.error-message').html('');
    }

    componentDidMount = () => {
        $('.menu').on('click', function () {
            $('.hamburger').toggleClass('cruz');
        })
    }

    render() {
        return (
            <View
                modalLogin={this.modalLogin}
                menuCel={this.menuCel}
            />
        );
    }
}
export default Header;
