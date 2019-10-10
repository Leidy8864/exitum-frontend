
import React from 'react';
import View from './Banner-view';
import $ from 'jquery';
import cleanForm from '../../redux/actions/clean-form'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Banner extends React.Component {

    cleanForm = e => {
        $('input[name=name').val('');
        $('input[name=lastname').val('');
        $('input[name=email').val('');
        $('input[name=password').val('');
        this.props.cleanForm("1");
    }

    render() {
        return (
            <View
                cleanForm={this.cleanForm}
            />
        );
    }
}

const mapDispatchToProps = {
    cleanForm
};


export default withRouter(
    connect(null, mapDispatchToProps)(Banner)
)

