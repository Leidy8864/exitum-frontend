
import React from 'react';
import './style.css';

import AdCard from '../AdCard/AdCard-view';

function View(props) {

    const {
        handleClickDelete,
        handleClickUpdate,
        adsList,
        userRole
    } = props

    return (
        <div className="container" id="lista-anuncios">
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="active" role="tabpanel" aria-labelledby="active-tab">
                    <div className="row">
                        {
                            adsList.length > 0 ?
                            adsList.map(function (item, index) {
                                    return (
                                        <div className="col-sm-6 py-2" key={item.id}>
                                            <AdCard
                                                title={item.title}
                                                id={item.id}
                                                index={index}
                                                startup={item.startup}
                                                state={item.state}
                                                handleClickDelete={handleClickDelete}
                                                handleClickUpdate={handleClickUpdate}
                                                userRole={userRole}
                                            />
                                        </div>
                                    )
                                })
                                :
                                <h4 className="text-center">No se encontraron anuncios activos</h4>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
