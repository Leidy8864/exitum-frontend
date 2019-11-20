
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

    return (
        <div className="container" id="entrepreneur-ads">
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
                                        proposals={item.proposals.length}
                                        userRole={userRole}
                                        slugAd={item.slug}
                                    />
                                </div>
                            )
                        })
                        
                        :
                        <h4 className="text-center">No se encontraron anuncios</h4>
                }
            </div>
        </div>

    );
}
export default View;
