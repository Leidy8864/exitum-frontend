
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
                            <div className="col-md-12 col-sm-12 events-padding" key={item.id}>
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

                    ''
                   
            }
        </div>
    );
}
export default View;
