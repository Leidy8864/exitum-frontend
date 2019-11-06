
import React from 'react';
import './style.css';

function View(props) {

    const {
        name,
        lastname,
        photo,
    } = props

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light dashboard-header">
            <div className="container-fluid">
                    <div className="content-user">
                    <span><img src={photo || "https://scontent.flim1-2.fna.fbcdn.net/v/t1.0-9/42392040_148260866114077_2698760361347121152_n.jpg?_nc_cat=108&_nc_oc=AQlLY22m4HIlkox1E7NBg89iUFaxRym4-xgDgVdoKXOcET0uMvqL21I1bH9lXsRjinqoztyAW4Ao_Al8rl85Zm_L&_nc_ht=scontent.flim1-2.fna&oh=35bb1f51c57f4f3a4096af24d3a6b394&oe=5E4863A6"} alt="svg" /></span>
                    {name || "Usuario"} {lastname || "Invitado"}
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                    </button>           
            </div>
        </nav>
    );
}
export default View;
