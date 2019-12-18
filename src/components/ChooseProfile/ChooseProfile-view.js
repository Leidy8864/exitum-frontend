
// import React, { Fragment } from 'react';
import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import './style.css';

function View(props) {

    const {
        handleChangeRole,
        goInicio
    } = props;

    return (
        <Fragment>
                <div className="ChooseProfile">
                    <img src={require("../../public/images/svg/logo-azul.svg")} />
                    <div className="title">
                        (Elige un perfil)
                </div>
                    <form className="content-choose">
                        <div className="content-radio">
                            <img className="img_impulsor" src={require("../../public/img/fresita_.png")} alt="svg" />
                            <br />
                            <input type="radio" name="role" id="employee" onChange={handleChangeRole} value="employee" />
                            <label htmlFor="employee">¿Quieres ser un impulsor?</label>
                        </div>
                        <div className="content-radio">
                            <img className="img_emprendedor" src={require("../../public/img/chikorita.png")} alt="svg" />
                            <br />
                            <input type="radio" name="role" id="entrepreneur" onChange={handleChangeRole} value="entrepreneur" />
                            <label htmlFor="entrepreneur">¿Quieres ser un emprendedor?</label>

                        </div>
                    </form>
                    <hr className="divider-choose"/>
                    <div className="info-exitum">
                        <p>Si aun no tienes una idea clara de que perfil escojer, informate en nuestra de <Link className="go-inicio" onClick={goInicio} to="/">landing page</Link></p>
                    </div>
                </div>
                
        </Fragment>
    );
}
export default View;
