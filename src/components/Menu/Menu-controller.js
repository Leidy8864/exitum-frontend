
import React from 'react';
import View from './Menu-view';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions  from '../../redux/actions'

class Menu extends React.Component {
    state = {
        selected_inicio: true,
        selected_empleo: false,
    }
    obtenerIdseleccionado = async(e) =>{
        const id = e.target.id;
        console.log(e.target.id)
        if(id === "inicio_element"){
            this.setState({ selected_inicio: true })
            this.setState({ selected_empleo: false })
            this.props.history.push('/dashboard');
        }else if (id === "empleo_element"){
            this.setState({ selected_empleo: true })
            this.setState({ selected_inicio: false })
            this.props.history.push('/advertisement');
        }
    }

    render() {
        let classInicio = "element";
        let classEmpleo = "element";
        if(this.props.selected == "inicio"){
            classInicio+= " selected"

        }else{
            classEmpleo+= " selected"
        }
        return (
            <View
            obtenerIdseleccionado = {this.obtenerIdseleccionado}
            classInicio = {classInicio}
            classEmpleo = {classEmpleo}
            />
        );
    }
}

export default withRouter(
    connect(null, actions)(Menu)
)