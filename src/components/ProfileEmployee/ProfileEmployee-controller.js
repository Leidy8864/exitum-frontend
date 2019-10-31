
import React from 'react';
import View from './ProfileEmployee-view';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { showCertificationByUser } from '../../redux/actions';

class ProfileEmployee extends React.Component {

    state = {
        certifications : []
    }

    async componentDidMount() {
        try {
            let id = localStorage.getItem('id')
            const certificationsAll = await showCertificationByUser(id);
            this.setState({
                certifications: certificationsAll
            })
        } catch (error) {
            console.log(error)
        }
    }

    idCertificate = e => {
        e.preventDefault();
        
    }

    render() {

        let user = localStorage.getItem('name');
        let lastname = localStorage.getItem('lastname')

        return (
            <View
                user={user}
                lastname={lastname}
                certifications = {this.state.certifications}
                idCertificate = {this.idCertificate}
            />
        );
    }
}

const mapDispatchToProps = {
    showCertificationByUser
};


export default withRouter(
    connect(null, mapDispatchToProps)(ProfileEmployee)
)
