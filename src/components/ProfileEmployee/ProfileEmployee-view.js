
import React from 'react';
import './style.css';

function View(){
    return(
        <div className="">
            <div className="user-profile">
                <div className="user-img">
                    <img className="img"  src="https://scontent.flim1-1.fna.fbcdn.net/v/t1.0-1/p720x720/10428028_835695433158765_3788812662788954865_n.jpg?_nc_cat=106&_nc_oc=AQmJVvoI1HFbx8zVRMe97wFm7ZW-JdW0pzu4HOKyzxed0RlRbL5OZ-pmHeXkFEiduCRldkEWxZ61HEOQNGN0ljH2&_nc_ht=scontent.flim1-1.fna&oh=ffd2fe1bafe1323e783160abee692407&oe=5E240E72" />
                </div>
                <div className="user-name">
                    <h2>Diego Ortega</h2>
                    <span>Developer Frontend</span>
                </div>
                <div className="info-employee">
                    <div className="icon-employee">
                        <img src={require('../../public/images/svg/forma-cuadrada-negra-redondeada.svg')} />
                    </div>
                    <div className="info">
                        <p>Impulsor</p>
                        <span>Programador</span>
                    </div>
                </div>
                <div className="user-start">
                    <img src={require('../../public/images/svg/estrella.svg')} />
                    <img src={require('../../public/images/svg/estrella.svg')} />
                    <img src={require('../../public/images/svg/estrella.svg')} />
                    <img src={require('../../public/images/svg/estrella.svg')} />
                    <img src={require('../../public/images/svg/estrella.svg')} />
                </div>
                <div className="user-plus">
                    <div className="plus">
                        <img src={require('../../public/images/svg/avatar.svg')} />
                        <a href="#"><span>Perfil</span></a>
                    </div>

                    <div className="plus">
                        <img src={require('../../public/images/svg/birrete.svg')} />
                        <a href="#"><span>Formación Academia</span></a>
                    </div>

                    <div className="plus">
                        <img src={require('../../public/images/svg/premio.svg')} />
                        <a href="#"><span>Certificaciones</span></a>
                    </div>

                    <div className="plus">
                        <img src={require('../../public/images/svg/equipo.svg')} />
                        <a href="#"><span>Experiencia laboral</span></a>
                    </div>

                    <div className="plus">
                        <img src={require('../../public/images/svg/hombre-que-corre.svg')} />
                        <a href="#"><span>Aptitudes</span></a>
                    </div>

                    <div className="plus">
                        <img src={require('../../public/images/svg/mano.svg')} />
                        <a href="#"><span>Disponibilidad</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
