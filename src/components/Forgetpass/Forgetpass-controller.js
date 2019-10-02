import React from 'react';
import View from './Forgetpass-view';
import $ from 'jquery'


class Forgetpass extends React.Component {

    sendEmail = e => {
        e.preventDefault();
        $('.modal-content').closest(this)
    }

    render() {
        return (
            <View
             sendEmail = {this.sendEmail}
            />
        );
    }
}
export default Forgetpass;
