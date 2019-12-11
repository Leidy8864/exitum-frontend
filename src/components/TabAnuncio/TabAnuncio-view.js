
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
                    <ul className="nav nav-pills add-tabs anuncios bg-white p-4" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a href="#" className={adType === "coincidence" ? "nav-link-person px-4 active" : "nav-link-curses px-4"} onClick={handleSetAdType.bind(this, "coincidence")}>Coincidencias</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={adType === "postulation" ? "nav-link-person px-4 active" : "nav-link-curses px-4"} onClick={handleSetAdType.bind(this, "postulation")}>Postulaciones</a>
                        </li>
                        {
                            userRole === "entrepreneur" ?
                                <li className="nav-item">
                                    <a href="#" className={adType === "favorite" ? "nav-link-person px-4 active" : "nav-link-curses px-4"} onClick={handleSetAdType.bind(this, "favorite")}>Favoritos</a>
                                </li>
                                : ''
                        }

                    </ul>
            }
        </div>
    );
}
export default View;
