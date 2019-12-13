import React from 'react';
import View from './ModalUpdateExperience-view';
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter } from 'react-router-dom'
import { updateExperience, listCategories } from '../../redux/actions';
import listExperiences from '../../redux/actions/list-experiences';
import $ from 'jquery'

class ModalUpdateExperience extends React.Component {

    state = {

        experience_id:'',
        position: '',
        description: '',
        company_name: '',
        category: '',
        date_expedition: new Date(),
        date_expiration: new Date(),
        isCurrentJob : true,
        isCompanynameChanged: false,
        isCategoryChanged: false,
        isOcupationChanged: false,
        isSelected: false,
        isDescriptionChanged:false,
        changed_date_expedition:false,
        changed_date_expiration:false,
        ocupation_name: '',
        categories:[],
        category_id:'',
        
    }

    async componentDidMount(){
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
        this.setState({ description: e.target.value , isDescriptionChanged: true})
    }

    updateExperience = async e => {
        e.preventDefault();
        let user_id = localStorage.getItem('id')
        let {
            description, company_name, date_expedition, date_expiration, 
            isDescriptionChanged, changed_date_expedition, changed_date_expiration,
            category_id,ocupation_name, isOcupationChanged, isCategoryChanged
        } = this.state;

        if(!isDescriptionChanged){
            description = $('#nombreDescripcion').val()
        }
        // if(!changed_date_expedition){
        //     date_expedition = moment(localStorage.getItem('date_start_')).add(1, 'days').format('YYYY-MM-DD')
        // }
        // if(!changed_date_expiration){
        //     date_expiration = moment(localStorage.getItem('date_end_')).add(1, 'days').format('YYYY-MM-DD')
        // }
        
        let isCurrentJob = document.getElementById('true_').checked?true:false;
        
        const formData = {
            user_id: user_id,
            experience_id:$('#experience_id').val(),
            description: description
        }
        if(company_name){
            formData.company_name = company_name.value;
        }
        if(isOcupationChanged){
            formData.position = ocupation_name.value;
        }
        if(isCategoryChanged){
            formData.category_id = category_id;
        }

        if(changed_date_expedition){
            formData.date_start = moment(date_expedition).format('YYYY-MM-DD')
        }
        
        
        if(changed_date_expiration){
            formData.date_end  = moment(date_expiration).format('YYYY-MM-DD')
        }

        if(!changed_date_expiration){
            formData.date_end  = moment(new Date()).format('YYYY-MM-DD')
        }
        formData.date_end  = !isCurrentJob ? formData.date_end: null

        await this.props.updateExperience(formData);

        $('#updateexperience').modal('hide');
        $('#nombreDescripcion').val('')
        $('#nombrePosition').val('')
        this.setState({ 
            position: '',
            description:'',
            company_name:'', 
            date_expedition: new Date(),  
            date_expiration: new Date(),
            isCurrentJob : true,
            isCompanynameChanged: false,
            isCategoryChanged: false,
            isOcupationChanged: false,
            isSelected: false,
            isDescriptionChanged:false,
            changed_date_expedition:false,
            changed_date_expiration:false,
            ocupation_name: '',
            categories:[],
            category_id:'',
        });
        this.props.listExperiences(1);
    }

    selectCurrentJob = async (e) =>{
        if(e.target.value === 'true_'){
            this.setState({isCurrentJob: true, isSelected:true})
            $('#endDateModal_').css("display", "none");
        }else{
            this.setState({isCurrentJob: false, isSelected:true})
            $('#endDateModal_').css("display", "block");
        }
    }
    
    onChange = date_expedition => {this.setState({ date_expedition: date_expedition, changed_date_expedition:true})}
    onChange_ = date_expiration => this.setState({ date_expiration: date_expiration,changed_date_expiration: true})

    handleChange = (newValue, actionMeta) => {
        if(newValue){
            this.setState({ company_name: newValue, isCompanynameChanged:true  })
        }
    };
    
    handleInputChange = (inputValue, actionMeta) => {
        
    };

    ocupationChange = (newValue, actionMeta) => {
        if(newValue){
            this.setState({ ocupation_name: {label:newValue.label, value:newValue.label} , isOcupationChanged: true })
        }
    };
    ocupationInputChange = (inputValue, actionMeta) => {
        
    };

    handleSelectChange = (option, action) => {
        this.setState({
            category: option,
            category_id: option.value,
            isCategoryChanged:true 
        })
    }
    
    render() {
        const {
            listCompaniesReducer,
            getExperienceReducer,
            listOcupationsReducer,
        } = this.props;

        let {
            experience_id,
            description,
            company_name,
            date_expedition,
            date_expiration,
            changed_date_expedition,
            changed_date_expiration,
            isCompanynameChanged,
            isDescriptionChanged,
            isSelected,
            isCategoryChanged,
            category,
            isOcupationChanged,
            ocupation_name
        } = this.state;

        experience_id = getExperienceReducer.id;

        if(getExperienceReducer.id && $('#experience_id').val() !== experience_id){
            if(!isCompanynameChanged)   company_name= {label: getExperienceReducer.company_name, value: getExperienceReducer.company_name}
            if(!isCategoryChanged)   category= {label: getExperienceReducer.category.name, value: getExperienceReducer.category.id}
            if(!isOcupationChanged)   ocupation_name = {label: getExperienceReducer.position, value: getExperienceReducer.position}
            if(!changed_date_expedition) date_expedition = new Date(moment(getExperienceReducer.date_start).add(1, 'days').format('YYYY-MM-DD'));
            if(!changed_date_expiration) date_expiration = new Date(moment(getExperienceReducer.date_end).add(1, 'days').format('YYYY-MM-DD'));
            if(!changed_date_expedition && !changed_date_expiration && !isCompanynameChanged && !isSelected && !isDescriptionChanged){
                $('#experience_id').val(experience_id);
                $('#positionName').val(getExperienceReducer.position);
            }

            if(!isDescriptionChanged){
                description = getExperienceReducer.description
                $('#nombreDescripcion').val(getExperienceReducer.description)
            }

            localStorage.setItem('date_start_', moment(getExperienceReducer.date_start).add(1, 'days').format('YYYY-MM-DD'));
            localStorage.setItem('date_end_', moment(getExperienceReducer.date_end).add(1, 'days').format('YYYY-MM-DD'));

            if(!isSelected){
                if(getExperienceReducer.current_job === 0){
                    $('#endDateModal_').css("display", "block");
                    let radiobtn = document.getElementById("false_");
                    radiobtn.checked = true;
                }else{
                    let radiobtn = document.getElementById("true_");
                    radiobtn.checked = true;
                    $('#endDateModal_').css("display", "none");
                }
            }
        }

        return (
            <View
                className="basic-single"
                categories = {this.state.categories}
                handleSelectChange={this.handleSelectChange}
                experience_id = {experience_id}
                description = {this.description}
                description_ = {description}
                date = {date_expedition}
                onChange = {this.onChange}
                onChange_ = {this.onChange_}
                dateFinal = {date_expiration}
                options = {listCompaniesReducer}
                handleChange={this.handleChange}
                handleInputChange={this.handleInputChange}
                company_name={company_name}
                category={category}
                selectCurrentJob={this.selectCurrentJob}
                updateExperience={this.updateExperience}
                ocupations = {listOcupationsReducer}
                ocupationChange = {this.ocupationChange}
                ocupationInputChange = {this.ocupationInputChange}
                ocupation_name = {ocupation_name}
            />
        );
    }
}

const mapDispatchToProps = {
    updateExperience,
    listExperiences,
    listCategories
}

const mapStateToProps = (state) => ({    
    listCompaniesReducer: state.listCompaniesReducer,
    getExperienceReducer: state.getExperienceReducer,
    listOcupationsReducer: state.listOcupationsReducer,
});

export default withRouter(
    connect(mapStateToProps,mapDispatchToProps)(ModalUpdateExperience)
)
