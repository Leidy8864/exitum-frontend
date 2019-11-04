
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
                    <span><img src={photo || "https://scontent.flim1-1.fna.fbcdn.net/v/t1.0-1/p160x160/76652265_3020671151491348_4142212806978043904_n.jpg?_nc_cat=104&_nc_oc=AQkKJ24_lfvVPaUBfwVVyM-AFDe0nfBoBLLwj3jQPbqym-EHnOsnyun-FhqxJai2dYWRs3DydbWsNfjqzM0eCKZa&_nc_ht=scontent.flim1-1.fna&oh=a0c172241527a620b68b54cf8c84c2f1&oe=5E62E90F"} alt="svg" /></span>
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
