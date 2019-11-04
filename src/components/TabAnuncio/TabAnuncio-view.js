
import React from 'react';
import './style.css';
function View(props) {
    const {
        handleSetState,
        adState,
        userRole
    } = props;
    return (
        <div>
            {
                userRole === "entrepreneur" ?
                    <ul className="nav nav-pills" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className={adState === "active" ? "nav-link px-4 active" : "nav-link px-4"} href="#" onClick={handleSetState.bind(this, "active")}>EN CURSO</a>
                        </li>
                        <li className="nav-item">
                            <a className={adState === "closed" ? "nav-link px-4 active" : "nav-link px-4"} href="#" onClick={handleSetState.bind(this, "closed")}>EN PAUSA</a>
                        </li>
                    </ul>
                    :
                    <ul className="nav nav-pills" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a href="#" className="nav-link px-4 active">COINCIDENCIAS</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-4">POSTULACIONES</a>
                        </li>
                    </ul>

            }
        </div>
    );
}
export default View;
