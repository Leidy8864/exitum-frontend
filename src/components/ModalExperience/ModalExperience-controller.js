
import React from 'react';
import View from './ModalExperience-view';
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter } from 'react-router-dom'
import { createExperience, listCategories } from '../../redux/actions';
import listExperiences from '../../redux/actions/list-experiences';
import $ from 'jquery'

class ModalExperience extends React.Component {

    state = {
        position: '',
        description: '',
        company_name: '',
        date_expedition: new Date(),
        date_expiration: new Date(),
        isCurrentJob : true,
        categories:[],
        ocupation_name:'',
        category_id:'',
        
    }

    

    async componentDidMount(){
        let radiobtn = document.getElementById("true");
        radiobtn.checked = true;
        const categorysData = await listCategories();
        
        var categories = [];
        if (categorysData.length >= 1) {
            categories = categorysData.map(x => ({ label: x.name, value: x.id }));
        }
        
        this.setState({
            categories: categories,
            // ocupations: ocupations,
        })
    }

    position = e => {
        this.setState({ position: e.target.value })
    }
    description = e => {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            return false;
        }
        this.setState({ description: e.target.value })
    }

    company_name = e => {
        this.setState({ company_name: e.target.value })
    }

    experience = async e => {
        e.preventDefault();
        let user_id = localStorage.getItem('id')
        const {ocupation_name,company_name,date_expedition, date_expiration, isCurrentJob, description, category_id} = this.state
        // let description_ = description.split("\n").join('<br>')
        let description_ = description

        let date_start = moment(date_expedition).format('YYYY-MM-DD');
        let date_end = null;
        if(!isCurrentJob){
            date_end = moment(date_expiration).format('YYYY-MM-DD');
        }
        const formData = {
            user_id, position:ocupation_name.value, company_name: company_name.value,
            date_start ,date_end, description: description_, category_id:category_id
        }

        await this.props.createExperience(formData);
        $('#experience').modal('hide');
        $('#nombreDescripcion').val('')
        $('#nombrePosition').val('')
        this.setState({ 
            position: '',
            description:'',
            company_name:'', 
            date_expedition: new Date(),  
            date_expiration: new Date(),
            isCurrentJob : true,
            ocupation_name:'',
            category_id:'',
        });
        this.props.listExperiences(1);
    }

    selectCurrentJob = async (e) =>{
        if(e.target.value === 'true'){
            this.setState({isCurrentJob: true})
            $('#endDateModal').css("display", "none");
        }else{
            this.setState({isCurrentJob: false})
            $('#endDateModal').css("display", "block");
        }
    }
    
    onChange = date_expedition => this.setState({ date_expedition })
    onChange_ = date_expiration => this.setState({ date_expiration})

    handleChange = (newValue, actionMeta) => {
        if(newValue){
            this.setState({ company_name: {label: newValue.label, value: newValue.value}  })
        }
    };

    ocupationChange = (newValue, actionMeta) => {
        if(newValue){
            this.setState({ ocupation_name: {label: newValue.label, value: newValue.label}  })
        }
    };
    ocupationInputChange = (inputValue, actionMeta) => {
        
    };
    
    handleInputChange = (inputValue, actionMeta) => {
        
    };
    

    handleSelectChange = (option, action) => {
        this.setState({category_id: option.value})
    }
    
    render() {
        const {
            listCompaniesReducer,
            listOcupationsReducer
        } = this.props;

        return (
            <View
                className="basic-single"
                categories = {this.state.categories}
                handleSelectChange={this.handleSelectChange}
                ocupations = {listOcupationsReducer}
                position = {this.position}
                description = {this.description}
                description_ = {this.state.description}
                // company_name = {this.company_name}
                experience = {this.experience}
                onChange={this.onChange}
                onChange_={this.onChange_}
                selectCurrentJob={this.selectCurrentJob}
                date={this.state.date_expedition}
                dateFinal={this.state.date_expiration}
                options = {listCompaniesReducer}
                handleChange={this.handleChange}
                handleInputChange={this.handleInputChange}
                company_name={this.state.company_name}
                ocupationChange = {this.ocupationChange}
                ocupationInputChange = {this.ocupationInputChange}
                ocupation_name = {this.state.ocupation_name}
            />
        );
    }
}

const mapDispatchToProps = {
    createExperience,
    listExperiences,
    listCategories,
}

const mapStateToProps = (state) => ({    
    listCompaniesReducer: state.listCompaniesReducer,
    listOcupationsReducer: state.listOcupationsReducer,
});

export default withRouter(
    connect(mapStateToProps,mapDispatchToProps)(ModalExperience)
)
