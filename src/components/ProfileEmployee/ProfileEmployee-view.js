
import React, { Fragment } from 'react';
import './style.css';

function View() {
    return (
        <Fragment>
            <div className="card mt-5 ml-4">
                <div className="user-bg"></div>
                <div className="user-profile">
                    <div className="user-img ml-5">
                        <div className="img-profile">
                            <img className="img" src="https://scontent.flim1-1.fna.fbcdn.net/v/t1.0-1/p720x720/10428028_835695433158765_3788812662788954865_n.jpg?_nc_cat=106&_nc_oc=AQmJVvoI1HFbx8zVRMe97wFm7ZW-JdW0pzu4HOKyzxed0RlRbL5OZ-pmHeXkFEiduCRldkEWxZ61HEOQNGN0ljH2&_nc_ht=scontent.flim1-1.fna&oh=ffd2fe1bafe1323e783160abee692407&oe=5E240E72" />
                        </div>
                        <div className="edit-profile mr-5 mt-2">
                            <a href="#"><img className="img" src={require('../../public/images/svg/lapiz.svg')} /></a>
                        </div>
                    </div>
                    <div className="profile-info">
                        <div className="user-name ml-5 mb-4">
                            <h2>Diego Jesús Ortega Roldan</h2>
                            <span>Programador Frontend en Techie</span>
                        </div>
                        <div>
                            <ul className="experiences mr-2">
                                <li className="experience-work">
                                    <a><img src="https://media.licdn.com/dms/image/C4E0BAQHn44w7q1n2_A/company-logo_400_400/0?e=1580342400&v=beta&t=Sh75IYul4OHWdjxOq1kUvXegWNYV0k8wl7ptURbZT5E" /></a>
                                    <span>Techie</span>
                                </li>
                                <li className="experience-study">
                                    <a><img src="https://media.licdn.com/dms/image/C4E0BAQHufAU__NTUlw/company-logo_400_400/0?e=1580342400&v=beta&t=e9zU3--DO7yZOu4Q2HrGeCHVFp_PsSAFClWrhzAZZ84" /></a>
                                    <span>Universidad Nacional del Callao</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-5 ml-4">
                <div className="experience mt-3">
                    <div className="experience-header">
                        <h3 className="ml-5">Experiencia</h3>
                        <a href="#"><img className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                    </div>
                </div>
                <div className="experience-info">
                    <div className="info-experience">
                        <div className="img-experience ml-5 mt-3">
                            <a href="#"><img src="https://media.licdn.com/dms/image/C4E0BAQHn44w7q1n2_A/company-logo_400_400/0?e=1580342400&v=beta&t=Sh75IYul4OHWdjxOq1kUvXegWNYV0k8wl7ptURbZT5E" /></a>
                        </div>
                        <div className="experience-info-content ml-4 mt-3">
                            <h4>Programador Frontend</h4>
                            <span>Techie</span>
                            <div className="time-exp">
                                Sep. de 2019 - actualidad 2.meses
                        </div>
                            <div className="description mb-4">
                                Desarrollo y Diseño de aplicaciones web.
                        </div>
                        </div>
                    </div>
                    <div className="edit-profile mr-5 mt-2">
                        <a href="#"><img className="img" src={require('../../public/images/svg/lapiz.svg')} /></a>
                    </div>
                </div>
                <hr />
                <div className="education mt-3">
                    <div className="education-header">
                        <h3 className="ml-5">Educación</h3>
                        <a href="#"><img className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                    </div>
                </div>
                <div className="education-info">
                    <div className="info-education">
                        <div className="img-education ml-5 mt-3">
                            <a href="#"><img src="https://media.licdn.com/dms/image/C4E0BAQHufAU__NTUlw/company-logo_400_400/0?e=1580342400&v=beta&t=e9zU3--DO7yZOu4Q2HrGeCHVFp_PsSAFClWrhzAZZ84" /></a>
                        </div>
                        <div className="experience-info-content ml-4 mt-3">
                            <h4>Universidad Nacional del Callao</h4>
                            <div className="description">
                                Ingenieria de Sistemas
                        </div>
                            <div className="time-exp mb-5">
                                Sep. de 2019 - actualidad 2.meses
                        </div>
                        </div>
                    </div>
                    <div className="edit-profile mr-5 mt-2">
                        <a href="#"><img className="img" src={require('../../public/images/svg/lapiz.svg')} /></a>
                    </div>
                </div>
            </div>

            <div className="card mt-5 ml-4">
                <div className="experience mt-3">
                    <div className="experience-header">
                        <h3 className="ml-5">Certificados</h3>
                        <a href="#"><img className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                    </div>
                </div>
                <div className="experience-info">
                    <div className="info-experience">
                        <div className="img-experience ml-5 mt-3">
                            <a href="#"><img src="https://media.licdn.com/dms/image/C4D0BAQHO_cO49I_FRA/company-logo_400_400/0?e=1580342400&v=beta&t=oadP5pJMM-PCd7xdRK0WCMUjtQvIy8Eg2m50fHKzs9U" /></a>
                        </div>
                        <div className="experience-info-content ml-4 mt-3">
                            <h4>Get Connected</h4>
                            <span>Cisco</span>
                            <div className="time-exp">
                                Exp.Ago. de 2017.
                        </div>
                            <div className="description mb-4">
                                Desarrollo y Diseño de aplicaciones web.
                        </div>
                        </div>
                    </div>
                    <div className="edit-profile mr-5 mt-2">
                        <a href="#"><img className="img" src={require('../../public/images/svg/lapiz.svg')} /></a>
                    </div>
                </div>
                <hr />
                <div className="aptitud mt-3">
                    <div className="aptitud-header">
                        <h3 className="ml-5">Aptitudes</h3>
                        <a href="#"><img className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                    </div>
                </div>
                <div className="experience-info">
                    <div className="info-aptitud ml-4">
                        <ul>
                            <li>Trabajo en equipo</li>
                            <li>Capacidad de adaptacion</li>
                            <li>Proactivo</li>
                            <li>Buen Relacionamiento</li>
                            <li>Polivalente</li>
                        </ul>
                    </div>
                    <div className="edit-profile mr-5 mt-2">
                        <a href="#"><img className="img" src={require('../../public/images/svg/lapiz.svg')} /></a>
                    </div>
                </div>
            </div>


        </Fragment>
    );
}
export default View;
