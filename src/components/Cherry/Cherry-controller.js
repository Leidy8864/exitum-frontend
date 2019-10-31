
import React from 'react';
import View from './Cherry-view';

class Cherry extends React.Component {

    state = {
        role: localStorage.getItem('role') || "",
        infoCherry: true,
        infoChiko:  localStorage.getItem('infoChiko'),
        show_info : false
    }

    async componentDidMount() {
        // this.setState({infoChiko: localStorage.getItem('infoChiko')})
        // localStorage.setItem('infoChiko', true);

    }

    changeCherry = () =>{
        this.setState({infoCherry: false})
        // this.setState({infoChiko: false})
        this.setState({show_info: false})
        localStorage.setItem('infoChiko', "false");
        // localStorage.setItem('show_info', false);
    }
    clickChiko = () =>{
        if(this.state.infoChiko === "true"){
            this.setState({show_info: true})
            // localStorage.setItem('show_info', true);
        }
    }

    render() {

        const {role, infoChiko, show_info} = this.state
        let chikoinfo = <br/>;
        let cherry = <br/>;
        if( role === "entrepreneur") {
            if(infoChiko === "true"){
                chikoinfo = <img src={require('../../public/images/svg/Asistentesigno.svg')} alt="logo de informacion" />
            }else{
                chikoinfo = <img src={require('../../public/images/svg/asistente_emprendedor.svg')} alt="logo de informacion" />
            }
        } 
        if (role === "employee") {
            if(this.state.infoCherry){
                cherry = <img src={require('../../public/images/svg/Fresitas.svg')} alt="logo" />
            }else{
                cherry = <img src={require('../../public/images/svg/Fresita.svg')} alt="logo" />
            }
        }

        return (
            <View
                role = {role}
                chikoinfo ={ chikoinfo}
                cherry = { cherry }
                changeCherry = { this.changeCherry }
                clickChiko = { this.clickChiko }
                clickCherry = { this.clickCherry }
                show_info = { show_info }
            />
        );
    }
}
export default Cherry;
