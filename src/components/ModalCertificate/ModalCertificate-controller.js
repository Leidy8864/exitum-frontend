
import React from 'react';
import View from './ModalCertificate-view';
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter } from 'react-router-dom'
import { createCertification } from '../../redux/actions';
import $ from 'jquery';
import listCertifications from '../../redux/actions/list-certifications';

class ModalCertificate extends React.Component {

    state = {
        name: '',
        company: '',
        date_expedition: new Date(),
        date_expiration: new Date(),
        document: ''
    }

    name = e => {
        this.setState({ name: e.target.value })
    }

    company = e => {
        this.setState({ company: e.target.value })
    }

    certificate = async e => {
        e.preventDefault();
        var formData = new FormData();
        const {name,company,date_expedition,date_expiration} = this.state;
        console.log("name = ", name);
        console.log("company = ", company);
        console.log("date_expedition = ", moment(date_expedition).format('YYYY-MM-DD'));
        console.log("date_expiration = ", moment(date_expiration).format('YYYY-MM-DD'));
        console.log("documento = ", document.querySelector('#choose_file').files[0]);
        formData.append('user_id',localStorage.getItem('id'));
        formData.append('name',name);
        formData.append('issuing_company',company);
        formData.append('date_expedition', moment(date_expedition).format('YYYY-MM-DD'));
        formData.append('date_expiration', moment(date_expiration).format('YYYY-MM-DD'));
        formData.append('document',document.querySelector('#choose_file').files[0]);
        
        const response = await this.props.createCertification(formData);
        $('#certificate').modal('hide')
        console.log("response", response);
        this.props.listCertifications(1);
    }

    onChange = date_expedition => this.setState({ date_expedition })
    onChange_ = date_expiration => this.setState({ date_expiration})
    

    render() {
        return (
            <View
                name= {this.name}
                company = {this.company}
                certificate = {this.certificate}
                onChange={this.onChange}
                onChange_= {this.onChange_}
                date={this.state.date_expedition}
                dateFinal={this.state.date_expiration}
            />
        );
    }
}

const mapDispatchToProps = {
    createCertification,
    listCertifications
}

export default withRouter(
    connect(null,mapDispatchToProps)(ModalCertificate)
)

