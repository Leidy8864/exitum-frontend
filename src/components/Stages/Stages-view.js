
import React from 'react';
import './style.css';


function View(props) {

    const {
        listSteps,
        selectStage,
        // lstStage,
        // getIdProjectReducer,
        // stage
    } = props

    return (
        <div className="stages">
            <div className="stage">
                <div className="container-stage">

                    {
                        listSteps.length >= 1 ?

                        listSteps.map(function(item,index){
                            return(
                                <div key={index} className="">
                                    {/* <p>{item.step}</p> */}
                                    <div className={`img` + index} onClick={selectStage}>
                                        <img  src={item.startup_steps[0].icon_count_tip} id={item.id} alt="img" />
                                    </div>
                                    <div className={`icon`+ index}>
                                        <img className="" src={item.icon} alt="img"/>
                                    </div>
                                </div>
                            )
                        })

                        :

                        <p>Seleccione un proyecto</p>
                    }
                </div>
            </div>
        </div>
    );
}
export default View;
