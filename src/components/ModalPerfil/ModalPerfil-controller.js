
import React from 'react';
import View from './ModalPerfil-view';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserPerfil } from '../../redux/actions'

class ModalPerfil extends React.Component {

    state = {
        name: localStorage.getItem('name'),
        lastname: localStorage.getItem('lastname'),
        phone: '',
        birthday: '',
        position: '',
    }

    namePerfil = e => {
        this.setState({name: e.target.value});
    }

    lastnamePerfil = e => {
        this.setState({lastname: e.target.value})
    }

    phonePerfil = e => {
        this.setState({phone: e.target.value})
    }

    birthdayPerfil = e => {
        this.setState({ birthday: e.target.value});
    }

    positionPerfil = e => {
        this.setState({ position: e.target.value});
    }

    updatePerfil = async (e) => {
        e.preventDefault();
        const { name,lastname,phone,birthday,position} = this.state
        let user_id = localStorage.getItem('id')
        const formData = {
            name,lastname,phone,position,birthday,user_id
        }
        console.log(formData)
        const res = await this.props.updateUserPerfil(formData)
        console.log(res)
    }


    render() {
        const { name,lastname,phone,birthday,position } = this.state
        return (
            <View
                name= {name}
                lastname={lastname}
                phone={phone}
                birthday = {birthday}
                position = {position}
                namePerfil={this.namePerfil}
                lastnamePerfil={this.lastnamePerfil}
                phonePerfil={this.phonePerfil}
                birthdayPerfil ={this.birthdayPerfil}
                positionPerfil={this.positionPerfil}
                updatePerfil = {this.updatePerfil}
            />
        );
    }
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = {
    updateUserPerfil
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalPerfil)
)
