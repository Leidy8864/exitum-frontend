
import React from 'react';
import './style.css';
function View(props) {
    const {
        handleSetState,
        adState,
        adType,
        userRole,
        handleSetAdType,
        isDetail
    } = props;
    return (
        <div>
            {
                userRole === "entrepreneur" ?

                    !isDetail ?
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
                                <a href="#" className={adType === "postulation" ? "nav-link px-4 active" : "nav-link px-4"} onClick={handleSetAdType.bind(this, "postulation")}>POSTULACIONES</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className={adType === "coincidence" ? "nav-link px-4 active" : "nav-link px-4"} onClick={handleSetAdType.bind(this, "coincidence")}>COINCIDENCIAS</a>
                            </li>
                            <li className="nav-item">
                            <a href="#" className={adType === "detail" ? "nav-link px-4 active" : "nav-link px-4"} onClick={handleSetAdType.bind(this,"detail")}>ANUNCIO</a>
                            </li>
                        </ul>
                    :
                    <ul className="nav nav-pills" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a href="#" className={adType === "coincidence" ? "nav-link px-4 active" : "nav-link px-4"} onClick={handleSetAdType.bind(this, "coincidence")}>COINCIDENCIAS</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={adType === "postulation" ? "nav-link px-4 active" : "nav-link px-4"} onClick={handleSetAdType.bind(this, "postulation")}>POSTULACIONES</a>
                        </li>
                    </ul>

            }
        </div>
    );
}
export default View;
