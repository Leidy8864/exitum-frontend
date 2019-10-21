
import React from 'react';
import View from './AddProyect-view';
import $ from 'jquery';
import cleanForm from '../../redux/actions/clean-form';
import { listStartupsByUser } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class AddProyect extends React.Component {
    state = {
        blockProjects: []
    }

    cleanForm = () => {
        $('#name_project').val('');
        $('input[name=category_id').val('');
        $('input[name=stage_id').val('');
        $('#description').val('');
        this.props.cleanForm("1");
    }

    async componentDidMount() {

        try {
            let proyectos = [];
            const listaProyectos = await listStartupsByUser({id:localStorage.getItem('id')});

            console.log("listaProyectos = ", listaProyectos)

            if (listaProyectos.length >= 1) {
                proyectos = listaProyectos.map(x => ({ key: x.id, id: x.id, name: x.name }));
                // proyectos = listaProyectos.map(x => ({ label: x.name, value: x.id }));
            }
            
            console.log("proyectos = ", proyectos)

            this.setState({
                blockProjects: proyectos
            });

        } catch (error) {
            console.log("ERROR");
        }

    }

    render() {
        return (
            <View
            cleanForm={this.cleanForm}
            blockProjects={this.state.blockProjects}
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
