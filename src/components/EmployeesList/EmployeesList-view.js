
import React from 'react';
import './style.css';
import EmployeeCard from '../EmployeeCard/EmployeeCard-controller';

function View(props) {
    const {
        employeesList,
        handleLikeEmployee
    } = props
    return (
        <div className="container-fluid mt-3" id="list-employees">
            <div className="row">
                {
                    employeesList.length > 0 ?
                        employeesList.map(function (item, index) {
                            return (
                                <div className="col-md-4 py-3" key={index}>
                                    <EmployeeCard
                                        key={index}
                                        name={item.name}
                                        short_description={item.short_description}
                                        price_hour={item.price_hour}
                                        avg_rating={item.avg_rating}
                                        saved={item.saved}
                                        user_id={item.user_id}
                                        photo={item.photo}
                                        handleLikeEmployee={handleLikeEmployee}
                                    />
                                </div>
                            )
                        })
                        :
                        <h5 className="text-center none-persons mt-2">No se encontraron impulsores</h5>
                }
            </div>
        </div>
    );
}
export default View;
