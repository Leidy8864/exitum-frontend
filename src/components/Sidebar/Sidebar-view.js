
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function View(props) {
    const {
        menu,
        logOut
    } = props;
    return (
        <div className="sidebar">
            <div className="cabecera">
                <div className="text-logo pt-4">
                    <img src={require('../../public/images/svg/logo-azul.svg')} alt="img"/>
                </div>
                <div className="user-sidebar mt-4 text-center">
                    <img width="100" src="https://scontent.flim1-2.fna.fbcdn.net/v/t1.0-9/42392040_148260866114077_2698760361347121152_n.jpg?_nc_cat=108&_nc_oc=AQlLY22m4HIlkox1E7NBg89iUFaxRym4-xgDgVdoKXOcET0uMvqL21I1bH9lXsRjinqoztyAW4Ao_Al8rl85Zm_L&_nc_ht=scontent.flim1-2.fna&oh=35bb1f51c57f4f3a4096af24d3a6b394&oe=5E4863A6" />
                    <div className="sidebar-info-user">
                        <h3 className="text-center name-perfil-sidebar mt-3">Ana Sanchez</h3>
                    </div>
                </div>
            </div>
            {menu}
            <div className="exit-dashboard">
                <Link to="/" onClick={logOut}><i className="far fa-arrow-alt-circle-left"></i></Link>
            </div>
        </div>
    );
}
export default View;
