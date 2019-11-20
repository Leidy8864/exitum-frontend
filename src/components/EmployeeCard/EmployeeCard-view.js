
import React from 'react';
import './style.css';

function View(props) {
    const {
        name,
        short_description,
        price_hour,
        starts,
        saved,
        user_id,
        photo,
        handleLikeEmployee
    } = props
    return (
        <div>
            <div className="card employees text-center justify-content-center">

                <span>
                {
                    saved? 
                    <img src={require('../../public/images/svg/like-active.svg')} alt="" width="30" className="like-button" onClick={handleLikeEmployee.bind(this,0,user_id)}/>
                    : 
                    <img src={require('../../public/images/svg/like.svg')} alt="" width="30" className="like-button" onClick={handleLikeEmployee.bind(this,1,user_id)}/>

                }
                </span>
                <img src={photo || 'https://www.w3schools.com/howto/img_avatar.png'} className="image-employee mx-auto d-block" alt="..."/>
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{short_description}</p>
                    
                    <p className="card-text">
                        {starts}
                    </p>
                </div>
                <div className="card-footer">
                    <p className="price-employe">Desde S/. {price_hour}</p>
                </div>
            </div>
        </div>
    );
}
export default View;
