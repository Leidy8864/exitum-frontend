
import React from 'react';
import './style.css';


function View(props) {

    const {
        listSteps,
        selectStage,
        role
    } = props

    return (
        <div className="stages">
            <div className="stage">
                <div className="container-stage">

                    {
                        listSteps.length > 0 ?

                        listSteps.map(function(item,index){
                            return(
                                <div key={index} className="stages-imgs">
                                    <div className={`img` + index} onClick={selectStage}>
                                        <img  src={role === "entrepreneur" ? item.startup_steps[0].icon_count_tip : item.employee_steps[0] ? item.employee_steps[0].icon_count_tip: null} id={item.id} alt="img" />
                                    </div>
                                    <div className={`icon`+ index}>
                                        <img className="" src={item.icon} alt="img"/>
                                    </div>
                                </div>
                            )
                        })

                        :

                        'No se encontraron resultados'
                    }
                </div>
            </div>
        </div>
    );
}
export default View;
