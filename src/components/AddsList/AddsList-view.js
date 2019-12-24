
import React from 'react';
import './style.css';

import AdCard from '../AdCard/AdCard-controller';

function View(props) {

    const {
        handleClickDelete,
        handleClickUpdate,
        adsList,
        userRole
    } = props
    console.log(adsList)
    return (
        <div className="mt-4 events-flex w-100" id="entrepreneur-ads">
            {
                adsList.length > 0 ?
                    adsList.map(function (item, index) {
                        return (
                            <div className="col-md-6 col-sm-12 events-padding" key={item.id}>
                                <AdCard
                                    title={item.title}
                                    description={item.description}
                                    id={item.id}
                                    index={index}
                                    startup={item.startup}
                                    state={item.state}
                                    handleClickDelete={handleClickDelete}
                                    handleClickUpdate={handleClickUpdate}
                                    proposals={item.proposals.length}
                                    userRole={userRole}
                                    slugAd={item.slug}
                                />
                            </div>
                        )
                    })

                    :


                    <div className="">
                        <div className="collapse" id="collapseExample">
                            <div className="card reminder-information">
                                <div className="card-body info-help-reminder">
                                    <div className="choose-calendar d-reminder-info">
                                        <i className="fas fa-plus" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i><p>Agregar un Anuncio</p>
                                    </div>
                                </div>
                                <div className="card-body info-help-reminder">
                                    <div className="choose-calendar d-reminder-info">
                                        <i className="far fa-play-circle" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i><p>Son tus propios anuncios creados, los cuales estan en marcha para que otras personas puedan verlos y así puedan postular a dicho anuncio, cuando tu desees puedes pausar tu anuncio.</p>
                                    </div>
                                </div>
                                <div className="card-body info-help-reminder">
                                    <div className="choose-calendar d-reminder-info">
                                        <i className="far fa-pause-circle" data-toggle="tooltip" data-placement="top" title="Reuniones"></i><p>Son tus propios anuncios creados, los cuales estan en pausa para que otras personas ya no puedan verlos, en este caso no habrán postulantes, cuando tu desees puedes reanudar tu anuncio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}
export default View;
