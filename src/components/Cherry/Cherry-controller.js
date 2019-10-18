
import React from 'react';
import View from './Cherry-view';

class Cherry extends React.Component {

    state = {
        role: localStorage.getItem('role') || "",
    }

    render() {

        const {role} = this.state
        let chikoinfo = ''
        let cherry = ''
        
        if( role === "entrepreneur") {
            chikoinfo = <img src={require('../../public/images/svg/Asistentesigno.svg')} alt="logo de informacion" />
        } 
        if (role === "employee") {
            cherry = <img src={require('../../public/images/svg/Fresita.svg')} alt="logo" />
        }

        return (
            <View
            role = {role}
            chikoinfo ={ chikoinfo}
            cherry = { cherry }
            />
        );
    }
}
export default Cherry;
