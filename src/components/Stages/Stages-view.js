
import React from 'react';
import './style.css';


function View(props) {

    const {
        listStages,
        selectStage
    } = props

    console.log(listStages)

    return (
        <div className="stages">
            <div className="stage">
                <div className="container-stage">
                    {
                        listStages.map(function(item,index){
                            return(
                                <div key={index} className="">
                                    <div className={`img` + index} onClick={selectStage}>
                                        <img  src={item.icon_count_tip} />
                                    </div>
                                    <div className={`icon`+ index}>
                                        <img className="" src={item.icon} />
                                    </div>
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
