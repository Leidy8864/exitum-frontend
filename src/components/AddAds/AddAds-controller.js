
import React from 'react';
import View from './AddAds-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cleanForm from '../../redux/actions/clean-form'
import $ from 'jquery';

class AddAds extends React.Component {

    cleanForm = () => {
        $('#title').val('');
        $('#description').val('');
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
    connect(null, mapDispatchToProps)(AddAds)
)