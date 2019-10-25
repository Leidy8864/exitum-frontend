
import React from 'react';
import './style.css';


function View(props) {

    const {
        listStages,
        selectStage,
        lstStage,
        getIdProjectReducer,
        stage
    } = props

    return (
        <div className="stages">
            <div className="stage">
                <div className="container-stage">

                    {
                        listStages.map(function(item,index){
                            return(
                                <div key={index} className="">
                                    <p>{item.name_step}</p>
                                    <div className={`img` + index} onClick={selectStage}>
                                        <img  src={item.icon_count_tip} id={item.id_step} />
                                    </div>
                                    {/* <div className={`icon`+ index}>
                                        <img className="" src={item.icon} />
                                    </div> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default View;
