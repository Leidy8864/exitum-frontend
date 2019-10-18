
import React from 'react';
import View from './AddProyect-view';
import $ from 'jquery';
import cleanForm from '../../redux/actions/clean-form'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class AddProyect extends React.Component {


    cleanForm = () => {
        $('#name_project').val('');
        $('input[name=category_id').val('');
        $('input[name=stage_id').val('');
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
    connect(null, mapDispatchToProps)(AddProyect)
)
