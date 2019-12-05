
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
                            <a className={adState === "active" ? "nav-link-curse px-4 active" : "nav-link-curses px-4"} href="#" onClick={handleSetState.bind(this, "active")}>En curso</a>
                        </li>
                        <li className="nav-item">
                            <a className={adState === "closed" ? "nav-link-curse px-4 active" : "nav-link-curses px-4"} href="#" onClick={handleSetState.bind(this, "closed")}>En pausa</a>
                        </li>
                    </ul>
                    :
                    <ul className="nav nav-pills add-tabs anuncios" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a href="#" className={adType === "coincidence" ? "nav-link px-4 active" : "nav-link px-4"} onClick={handleSetAdType.bind(this, "coincidence")}>Coincidencias</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={adType === "postulation" ? "nav-link px-4 active" : "nav-link px-4"} onClick={handleSetAdType.bind(this, "postulation")}>Postulaciones</a>
                        </li>
                        {
                            userRole === "entrepreneur" ?
                                <li className="nav-item">
                                    <a href="#" className={adType === "favorite" ? "nav-link px-4 active" : "nav-link px-4"} onClick={handleSetAdType.bind(this, "favorite")}>Favoritos</a>
                                </li>
                                : ''
                        }

                    </ul>
            }
        </div>
    );
}
export default View;
