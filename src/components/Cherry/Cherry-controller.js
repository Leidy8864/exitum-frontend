import React from 'react';
import View from './Cherry-view';
import {searchTip, validadeTip} from '../../redux/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Cherry extends React.Component {

    state = {
        role: localStorage.getItem('role') || "",
        user_id: localStorage.getItem('id') || "",
        infoCherry: true,
        infoChiko:  true,
        show_info : false,
        textInfo:"",
        advice_id:0,
    }

    changeCherry = async() =>{
        const {advice_id,user_id,  role} = this.state;
        const formdata = {
            advice_id: advice_id,
            user_id: user_id,
            type: role
        }
        const response = await this.props.validadeTip(formdata);
        this.setState({
            infoCherry: false, 
            infoChiko: false, 
            show_info: false
        })
    }
    clickChiko = () =>{
        if(this.state.infoChiko){
            this.setState({show_info: true})
        }
    }
    clickCherry = () =>{
        if(this.state.infoCherry){
            this.setState({show_info: true})
        }
    }

    async componentDidMount() {
        const {user_id, role} = this.state
        const tip = await searchTip(user_id, role);
        if(tip && tip.status){
            this.setState({
                textInfo:tip.data.description,
                advice_id:tip.data.id,
                infoCherry: true,
                infoChiko:true})
        }else{
            this.setState({infoCherry: false, infoChiko: false})
        }

    }

    render() {
        const {role, infoChiko, show_info, textInfo} = this.state
        let chikoinfo = <br/>;
        let cherry = <br/>;
        if( role === "entrepreneur") {
            if(infoChiko){
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
                textInfo = { textInfo }
            />
        );
    }
}
// export default Cherry;


const mapDispatchToProps = {
    searchTip,
    validadeTip
};

export default withRouter(
    connect(null, mapDispatchToProps)(Cherry)
)
