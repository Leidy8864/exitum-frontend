
import React from 'react';
import View from './ProfileEmployee-view';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { showCertificationByUser, showExperienceByUser, showEducationByUser } from '../../redux/actions';
import getCertificate from '../../redux/actions/get-certificate';


class ProfileEmployee extends React.Component {

    state = {
        certifications : [],
        experiences: [],
        educations: []
    }

    async componentDidMount() {
        try {
            let id = localStorage.getItem('id')
            const certificationsAll = await showCertificationByUser(id);
            const experiencesAll = await showExperienceByUser(id);
            const educationsAll = await showEducationByUser(id);
            this.setState({
                certifications: certificationsAll,
                experiences: experiencesAll,
                educations: educationsAll
            })
        } catch (error) {
            console.log(error)
        }
    }

    idCertificate = async (e) => {
        e.preventDefault();
        const certificate = this.state.certifications[e.target.id];
        this.props.getCertificate(certificate);
    }

    render() {

        let user = localStorage.getItem('name');
        let lastname = localStorage.getItem('lastname')
        return (
            <View
                user={user}
                lastname={lastname}
                experiences = {this.state.experiences}
                educations = {this.state.educations}
                certifications = {this.state.certifications}
                idCertificate = {this.idCertificate}
            />
        );
    }
}

const mapDispatchToProps = {
    showCertificationByUser,
    getCertificate
};


export default withRouter(
    connect(null, mapDispatchToProps)(ProfileEmployee)
)
