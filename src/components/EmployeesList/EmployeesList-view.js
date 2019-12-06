
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
                                <div className="col-sm-3 py-3" key={index}>
                                    <EmployeeCard
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
                        <h6 className="text-center">No se encontraron impulsores</h6>
                }
            </div>
        </div>
    );
}
export default View;
