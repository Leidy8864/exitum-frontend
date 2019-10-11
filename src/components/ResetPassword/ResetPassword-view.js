
import React from 'react';
import './style.css';
import Header from '../Header/Header-controller';

function View() {
    return (
        <div>
            <div className="container container-form">
                <div className="row">
                    <div className="col-sm-12 align-self-center">
                        <div className="welcome-ex col-sm-12">
                            <span><img src={require("../../public/images/svg/logo-azul.svg")} alt="svg" /></span>
                        </div>
                        <form action="" className="reset-form">
                            <div className="row justify-content-start">
                                <div className="col-sm-12">
                                    <input type="password"
                                        name="password"
                                        placeholder="Cambiar Contraseña" />
                                </div>
                                <div className="col-sm-12">
                                    <input type="password"
                                        name="confirmPassword"
                                        placeholder="Confirmar Contraseña" />
                                </div>
                                <div className="send-submit">
                                    <button type="submit" className="submit-signup">Restablecer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



        // <div className="container  ">
        //     <div className="row  py-2">
        //         <div className="card  border-primary justify-content-center">
        //             <div>
        //                 <div className="card-body">
        //                     <h3 className="card-title">Vertical Center</h3>
        //                     <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //                     <a href="#" className="btn btn-outline-secondary">Outline</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {/* <form action="">
        //         <div className="row align-items-center h-100">
        //             <div className="col-sm-12">
        //                 <input type="password"
        //                     name="password"
        //                     placeholder="Cambiar Contraseña" />
        //             </div>
        //             <div className="col-sm-12">
        //                 <input type="password"
        //                     name="confirmPassword"
        //                     placeholder="Confirmar Contraseña" />
        //             </div>
        //             <div className="send-submit">
        //                 <button type="submit" className="submit-signup">Restablecer</button>
        //             </div>
        //         </div>
        //     </form> */}
        // </div>
    );
}
export default View;
