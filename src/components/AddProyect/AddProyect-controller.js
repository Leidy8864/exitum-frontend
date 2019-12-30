
import React from 'react';
import View from './AddProyect-view';
import $ from 'jquery';
import cleanForm from '../../redux/actions/clean-form';
import openModal from '../../redux/actions/openModal';
import { listStartupsByUser } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getIdProject from '../../redux/actions/get-id-project';
import reloadPage from '../../redux/actions/reloadPage';
import moment from 'moment';

const role = localStorage.getItem('role');

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
        this.props.openModal(true);
    }

    async componentDidMount() {
        try {
            if (role === "entrepreneur") {
                this.getListOfProject();
            }

        } catch (error) {
            console.log("ERROR", error);
        }

    }
    componentDidUpdate(nextProps) {
        const { reload } = this.props;

        if (nextProps.reload !== reload) {
            if (reload) {
                this.getListOfProject();
                this.props.reloadPage(0);
            }
        }
    }

    getListOfProject = async () => {
        let proyectos = [];
        const listaProyectos = await listStartupsByUser({ id: localStorage.getItem('id') });
        if (listaProyectos.length >= 1) {
            proyectos = listaProyectos.map(x => ({ key: x.id, id: x.id, name: x.name, description: x.description, created: moment(x.created).format('DD/MM/YYYY') }));
            this.props.getIdProject(proyectos[0]);
            this.setState({
                selected: listaProyectos[0].id,
                show_add_proyect_empty: false
            });
        } else {
            this.setState({
                // selected: listaProyectos[0].id,
                show_add_proyect_empty: true,
            });
        }

        this.setState({
            blockProjects: proyectos
        });
    }

    selectProject = (e) => {

        let projectId = e.target.id;
        console.log("BLOCKPRO", this.state.blockProjects);
        console.log("PROJECTID", projectId);

        const project = this.state.blockProjects.find((item) => item.id == projectId);
        this.props.getIdProject(project);

        this.setState({ selected: projectId });
    }

    render() {
        return (
            <View
                cleanForm={this.cleanForm}
                blockProjects={this.state.blockProjects}
                selectProject={this.selectProject}
                selected={this.state.selected}
                show_add_proyect_empty={this.state.show_add_proyect_empty}
                role={role}
            />
        );
    }
}
const mapStateToProps = state => ({
    reload: state.reloadPageReducer
});
const mapDispatchToProps = {
    cleanForm,
    getIdProject,
    listStartupsByUser,
    openModal,
    reloadPage
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AddProyect)
)
