
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
        <div className="mt-4 w-100" id="entrepreneur-ads">
                <h5 className="ml-4 mb-4">Mis Anuncios</h5>
                {
                    adsList.length > 0 ?
                        adsList.map(function (item, index) {
                            return (
                                <div className="col-md-12 events-padding" key={item.id}>
                                    <AdCard
                                        title={item.title}
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
                        <h5 className="text-center none-persons">No se encontraron anuncios</h5>
                }
            </div>
    );
}
export default View;
