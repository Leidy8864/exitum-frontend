
import React from 'react';
import View from './AddProyect-view';
import $ from 'jquery';
import cleanForm from '../../redux/actions/clean-form';
import { listStartupsByUser } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getIdProject from '../../redux/actions/get-id-project';
class AddProyect extends React.Component {
    state = {
        blockProjects: [],
        selected: "",
        show_add_proyect_empty: false,
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
            if (listaProyectos.length >= 1) {
                proyectos = listaProyectos.map(x => ({ key: x.id, id: x.id, name: x.name }));
                localStorage.setItem('idProject', listaProyectos[0].id.toString());
                // localStorage.setItem('idProject', listaProyectos[0].id);
                this.props.getIdProject(listaProyectos[0].id);
                this.setState({
                    selected: listaProyectos[0].id,
                    show_add_proyect_empty: false,
                });
            }else{
                this.setState({
                    // selected: listaProyectos[0].id,
                    show_add_proyect_empty: true,
                });
            }

            this.setState({
                blockProjects: proyectos
            });

        } catch (error) {
            console.log("ERROR");
        }

    }

    selectProject = async (e) =>{
        localStorage.setItem('idProject', e.target.id);
        this.props.getIdProject(e.target.id);
        this.setState({selected: e.target.id});
    }

    render() {
        return (
            <View
            cleanForm={this.cleanForm}
            blockProjects={this.state.blockProjects}
            selectProject={this.selectProject}
            selected={this.state.selected}
            show_add_proyect_empty={this.state.show_add_proyect_empty}
            />
        );
    }
}
const mapDispatchToProps = {
    cleanForm,
    getIdProject,
    listStartupsByUser
};


export default withRouter(
    connect(null, mapDispatchToProps)(AddProyect)
)
