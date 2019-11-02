
import React from 'react';
import View from './ModalProjects-view';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listCategories, listStages, createStartup } from '../../redux/actions';
import cleanForm from '../../redux/actions/clean-form'
import $ from 'jquery';
class ModalsProjects extends React.Component {
    state = {
        id: '',
        name: '',
        category_id: '',
        stage_id: '',
        description: '',
        error_name: '',
        error_category: '',
        error_stage: '',
        error_description: '',
        success_message: '',
        error_message: '',
        categories: [],
        stages: [],
        stageDescription: ''
    };
    async componentDidUpdate(nextProps) {

        const {isModalOpen} = this.props;

        if (nextProps.isModalOpen !== isModalOpen) {
            if (isModalOpen) {                
                try {
    
                    const categorysData = await listCategories();
        
                    const stageData = await listStages();
        
                    console.log("STAGE DATA", stageData);
        
                    var categories = [];
                    var stages = [];
                    if (categorysData.length >= 1) {
                        categories = categorysData.map(x => ({ label: x.name, value: x.id }));
                    }
                    if (stageData.length >= 1) {
                        stages = stageData.map(x => ({ label: x.stage, value: x.id, description: x.description }));
                    }
        
                    const token = localStorage.getItem('token');
        
                    const result = jwt.decode(token);
        
                    this.setState({
                        categories: categories,
                        stages: stages,
                        id: result.id
                    });
                } catch (error) {
                    console.log("ERROR");
                }   
            }
        }
    }
    handleChange = (e) => {

        const value = e.target.value.trim();

        this.setState({
            [e.target.name]: value
        });
    }
    handleSelectChange = (option, action) => {

        let stageDescription = "";

        if (action.name === "stage_id") {

            const stage = this.state.stages.find((stage) => stage.value === option.value);
            stageDescription = stage.description;
            console.log("STAGE FOUND", stage);
        }
        this.setState({
            [action.name]: option.value,
            stageDescription: stageDescription
        });
    }

    handleSubmit = async (e) => {
        this.props.cleanForm("0");

        this.setState({
            error_name: '',
            error_category: '',
            error_stage: '',
            error_description: '',
            success_message: '',
            error_message: '',
        })

        e.preventDefault();

        console.log("EEEE", e)

        const { id, category_id, stage_id, description, name } = this.state;

        const formData = {
            id, category_id, stage_id, description, name
        }

        if (id && category_id && stage_id && description && name) {

            console.log("NAME" + name);
            const response = await createStartup(formData);

            console.log("DATA RECIBIDA", formData);

            console.log("DATA RECIBIDA STARTUP", response);

            if (response.status) {
                this.setState({ success_message: response.message });
                setTimeout(
                    () => {
                        $('#NewProjectModal').modal('hide');
                        window.location.reload();
                    },
                    1000
                );
            } else {
                console.log("error = ", response.message)
                this.setState({ error_message: response.message });
                setTimeout(
                    () => {
                        $('#NewProjectModal').modal('hide');
                        // window.location.reload();
                    },
                    1000
                );
            }

        } else {
            if (!name) {
                this.setState({ error_name: 'Debes ingresar un nombre' })
            }
            if (!category_id) {
                this.setState({ error_category: 'Debes elegir una categoría' })
            }
            if (!stage_id) {
                this.setState({ error_stage: 'Debes elegir una fase' })
            }
            if (!description) {
                this.setState({ error_description: 'Debes ingresar una descripción' })
            }
        }

    }
    render() {
        const {
            categories,
            stages,
            stageDescription
        } = this.state;

        const { cleanFormReducer } = this.props;

        let error_name = this.state.error_name
        let error_category = this.state.error_category
        let error_stage = this.state.error_stage
        let error_description = this.state.error_description
        let success_message = this.state.success_message
        let error_message = this.state.error_message
        let content_error_name = '';
        let content_error_category = '';
        let content_error_stage = '';
        let content_error_description = '';
        let content_message = '';

        if (cleanFormReducer) {
            error_name = '';
            error_category = '';
            error_stage = '';
            error_description = '';
            success_message = '';
            error_message = '';
        }

        if (error_name) {
            content_error_name = <p>{error_name}</p>;
        }
        if (error_category) {
            content_error_category = <p>{error_category}</p>;
        }
        if (error_stage) {
            content_error_stage = <p>{error_stage}</p>;
        }
        if (error_description) {
            content_error_description = <p>{error_description}</p>;
        }
        if (success_message) {
            content_message = <div className="success-message"><p className="text-center">{success_message}</p></div>;
        }
        if (error_message) {
            content_message = <div className="error-message"><p className="text-center">{error_message}</p></div>;
        }

        return (
            <View
                className="basic-single"
                categoryOptions={categories}
                stageOptions={stages}
                content_message={content_message}
                content_error_name={content_error_name}
                content_error_category={content_error_category}
                content_error_stage={content_error_stage}
                content_error_description={content_error_description}
                stageDescription={stageDescription}
                handleChange={this.handleChange}
                handleSelectChange={this.handleSelectChange}
                handleSubmit={this.handleSubmit}

            />
        );
    }
}
const mapStateToProps = state => ({
    cleanFormReducer: state.cleanFormReducer,
    isModalOpen : state.openModalReducer
});
const mapDispatchToProps = {
    listCategories,
    listStages,
    createStartup,
    cleanForm
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalsProjects)
)
