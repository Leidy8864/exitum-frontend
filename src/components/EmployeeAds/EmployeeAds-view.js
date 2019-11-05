
import React from 'react';
import './style.css';
import AdCard from '../AdCard/AdCard-view';
import AdDetail from '../AdDetail/AdDetail-controller';
function View(props) {

    const {
        adsList,
        userRole,
        handleSetAdId
    } = props

    return (
        <div className="container employee-ads-class mt-3" id="employee-ads">
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
                                        userRole={userRole}
                                        handleSetAdId={handleSetAdId}
                                    />
                                </div>
                            )
                        })
                        :
                        <h4 className="text-center">No se encontraron anuncios</h4>
                }
            </div>
            <AdDetail />
        </div>
    );
}
export default View;
