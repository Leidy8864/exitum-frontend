
import React from 'react';
import View from './Banner-view';
import $ from 'jquery';
import clearSignUp from '../../redux/actions/clean-sign-up'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Banner extends React.Component {

    clearSignUp = e => {
        $('input[name=name').val('');
        $('input[name=lastname').val('');
        $('input[name=email').val('');
        $('input[name=password').val('');
        this.props.clearSignUp("1");
    }

    render() {
        return (
            <View
                clearSignUp={this.clearSignUp}
            />
        );
    }
}

const mapDispatchToProps = {
    clearSignUp
};


export default withRouter(
    connect(null, mapDispatchToProps)(Banner)
)

