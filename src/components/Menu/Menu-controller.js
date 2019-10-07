
import React from 'react';
import View from './Menu-view';

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
        }else if (id === "empleo_element"){
            this.setState({ selected_empleo: true })
            this.setState({ selected_inicio: false })
        }
    }

    render() {
        let classInicio = "element"
        if(this.state.selected_inicio){
            classInicio+= " selected"
        }
        let classEmpleo = "element"
        if(this.state.selected_empleo){
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
export default Menu;
