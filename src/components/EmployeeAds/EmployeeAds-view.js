
import React from 'react';
import './style.css';
import AdCard from '../AdCard/AdCard-controller';
import ModalAdDetail from '../ModalAdDetail/ModalAdDetail-controller';
function View(props) {

    const {
        adsList,
        userRole,
        handleSetAdId
    } = props

    return (
        <div className="employee-ads-class mt-4" id="employee-ads">
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
                                        description={item.description}
                                        handleSetAdId={handleSetAdId}
                                    />
                                </div>
                            )
                        })
                        :
                        <h5 className="text-center none-persons pl-3">No se encontraron anuncios</h5>
                }
            </div>
            <ModalAdDetail />
        </div>
    );
}
export default View;
