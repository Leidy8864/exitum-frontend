
import React from 'react';
import View from './AddProyect-view';
import $ from 'jquery';
import cleanForm from '../../redux/actions/clean-form';
import { listStartupsByUser } from '../../redux/actions';
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

    async componentDidMount() {

        try {

            const listaProyectos = await listStartupsByUser({id:"1"});

        } catch (error) {
            console.log("ERROR");
        }

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
    cleanForm,
    listStartupsByUser
};


export default withRouter(
    connect(null, mapDispatchToProps)(AddProyect)
)
