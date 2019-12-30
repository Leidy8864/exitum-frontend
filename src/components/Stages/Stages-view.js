
import React from 'react';
import './style.css';


function View(props) {

    const {
        listSteps,
        selectStage,
        role
    } = props

    let par,impar

    return (
        <div className="stages">
            <div className="stage">
                <div className="container-stage ">

                    {
                        listSteps.length > 0 ?
                        listSteps.map(function(item,index){
                            return(
                                <div key={index} className="stages-imgs">
                                    <div className={((index % 2) == 0) ? "icon-par" : "icon-impar" }>
                                        <img id={item.id} onClick={selectStage}  className="" src={item.icon || require('../../public/images/svg/verify.png')} alt="img"/>
                                        </div>
                                    <div className={((index % 2) == 0) ? "impar" : "par"  }>
                                        <img onClick={selectStage}   src={role === "entrepreneur" ? item.startup_steps[0].icon_count_tip : item.employee_steps[0] ? item.employee_steps[0].icon_count_tip: null} id={item.id} alt="img" />
                                    </div>    
                                </div>
                            )
                        })

                        :

                        ''
                    }
                </div>
            </div>
        </div>
    );
}
export default View;
