
import React from 'react';
import View from './ModalPerfil-view';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/actions'

class ModalPerfil extends React.Component {

    state = {
        name: localStorage.getItem('name'),
        lastname: localStorage.getItem('lastname'),
        phone: '',
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

    updatePerfil = async (e) => {
        e.preventDefault();
        const { name,lastname,phone} = this.state
        let user_id = localStorage.getItem('id')
        const formData = {
            name,lastname,phone,user_id
        }
        console.log(formData)
        const res = await this.props.updateUser(formData)
        console.log(res)
    }


    render() {
        const { name,lastname,phone } = this.state
        return (
            <View
                name= {name}
                lastname={lastname}
                phone={phone}
                namePerfil={this.namePerfil}
                lastnamePerfil={this.lastnamePerfil}
                phone={this.phonePerfil}
                updatePerfil = {this.updatePerfil}
            />
        );
    }
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = {
    updateUser
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalPerfil)
)
