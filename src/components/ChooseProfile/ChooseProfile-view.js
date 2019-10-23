
// import React, { Fragment } from 'react';
import React from 'react';
import './style.css';

function View(props) {

    const {
        handleChangeRole
    } = props;

    return (
            <div className="ChooseProfile">
                <div className="title">
                    Elige un perfil
            </div>
                <form>
                    <div className="content-radio">
                        <img className="img_impulsor" src={require("../../public/images/svg/asistente_impulsor.svg")} alt="svg" />
                        <br />
                        <input type="radio" name="role" id="employee" onChange={handleChangeRole} value="employee" />
                        <label for="employee">Impulsor</label>
                    </div>
                    <div className="content-radio">
                        <img className="img_emprendedor" src={require("../../public/images/svg/asistente_emprendedor.svg")} alt="svg" />
                        <br />
                        <input type="radio" name="role" id="entrepreneur" onChange={handleChangeRole} value="entrepreneur" />
                        <label for="entrepreneur">Emprendedor</label>
                    </div>
                </form>
            </div>
    );
}
export default View;
