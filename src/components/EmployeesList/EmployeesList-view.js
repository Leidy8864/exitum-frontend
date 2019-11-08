
import React from 'react';
import './style.css';
import EmployeeCard from '../EmployeeCard/EmployeeCard-controller';

function View(props) {
    const {
        employeesList
    } = props
    return (
        <div className="container mt-3">
            <div className="row">
                {
                    employeesList.length > 0 ?
                    employeesList.map(function (item, index) {
                            return (
                                <div className="col-sm-4 py-2" key={index}>
                                    <EmployeeCard
                                    name={item.name}
                                    short_description={item.short_description}
                                    price_hour={item.price_hour}

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
