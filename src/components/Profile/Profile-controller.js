
import React from 'react';
import View from './Profile-view';
import ProfileEmployee from '../ProfileEmployee/ProfileEmployee-controller'
import EntrepeneurProfile from '../EntrepeneurProfile/EntrepeneurProfile-controller'

class Profile extends React.Component {

    state = {
        role: localStorage.getItem('role') || ""
    }

    render() {

        const {role} = this.state

        let perfilImpulsor = ""
        let perfilEntrepeneur = ""

        if(role === 'entrepreneur'){
            perfilEntrepeneur =  <EntrepeneurProfile />
        }

        if(role === 'employee'){
            perfilImpulsor = <ProfileEmployee />
        }

        return (
            <View
                role ={role}
                perfilEntrepeneur = {perfilEntrepeneur}
                perfilImpulsor = {perfilImpulsor}
            />
        );
    }
}
export default Profile;
