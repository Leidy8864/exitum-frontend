
import React from 'react';
import './style.css';
function View(props) {
    const {
        handleSetState,
        adState,
        adType,
        userRole,
        handleSetAdType,
        isDetail,
        forEvents
    } = props;
    return (
        <div>
            {
                !isDetail && userRole === "entrepreneur" ?
                    <ul className="nav nav-pills add-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className={adState === "active" ? "nav-link-curse px-4 active" : "nav-link-curses px-4"} href="#" onClick={handleSetState.bind(this, "active")}><i data-toggle="tooltip" data-placement="top" title="Anuncios en actividad"  className="far fa-play-circle"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className={adState === "closed" ? "nav-link-curse px-4 active" : "nav-link-curses px-4"} href="#" onClick={handleSetState.bind(this, "closed")}><i data-toggle="tooltip" data-placement="top" title="Anuncios en pausa" className="far fa-pause-circle"></i></a>
                        </li>
                    </ul>
                    :
                    <ul className="nav nav-pills add-tabs anuncios container-options" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a href="#" className={adType === "coincidence" ? "nav-link-anuncio px-4 active" : "nav-link-curses px-4"} onClick={handleSetAdType.bind(this, "coincidence")}><i data-toggle="tooltip" data-placement="top" title="Coincidencias"  className="fas fa-american-sign-language-interpreting"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={adType === "postulation" ? "nav-link-anuncio px-4 active" : "nav-link-curses px-4"} onClick={handleSetAdType.bind(this, "postulation")}><i data-toggle="tooltip" data-placement="top" title="Postulaciones"  className="fas fa-mail-bulk"></i></a>
                        </li>
                        {
                            userRole === "entrepreneur" ?
                                <li className="nav-item">
                                    <a href="#" className={adType === "favorite" ? "nav-link-anuncio px-4 active" : "nav-link-curses px-4"} onClick={handleSetAdType.bind(this, "favorite")}><i data-toggle="tooltip" data-placement="top" title="Favoritos" className="fas fa-heart"></i></a>
                                </li>
                                : ''
                        }
                    </ul>
            }
        </div>
    );
}
export default View;
