
import React from 'react';
import View from './Cherry-view';

class Cherry extends React.Component {

    state = {
        role: localStorage.getItem('role') || "",
    }

    showCherry = async() => {
        this.setState ({
            role: ''
        })
    }

    render() {

        const {role} = this.state

        let chikoinfo = ''
        let cherry = ''
        
        if( role === "entrepreneur") {
            chikoinfo = <img src={require('../../public/images/svg/Asistentesigno.svg')} alt="logo de informacion" />
        } else if (role === "employee") {
            cherry = <img src={require('../../public/images/svg/Fresita.svg')} alt="logo de informacion" />
        }

        return (
            <View
            chikoinfo ={ chikoinfo}
            cherry = { cherry }
            showCherry = {this.showCherry}
            />
        );
    }
}
export default Cherry;
