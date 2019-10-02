
import React from 'react';
import View from './Header-view';
import $ from 'jquery'

class Header extends React.Component {

    modalLogin = e => {
        e.preventDefault();
        $('body').addClass('bn-login')
    }

    render() {
        return (
            <View
                modalLogin={this.modalLogin}
            />
        );
    }
}
export default Header;
