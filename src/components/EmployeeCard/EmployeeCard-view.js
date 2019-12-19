
import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className="card profiles text-center justify-content-center">
                <div className="img-photo">
                    <img src={photo || 'https://www.w3schools.com/howto/img_avatar.png'} className="image-employee mx-auto d-block" alt="..." />
                    <div className="heart">
                        {
                            saved ?
                                <i className="fas fa-thumbs-up" onClick={handleLikeEmployee.bind(this, 0, user_id)}></i>
                                :
                                <i className="far fa-thumbs-up" onClick={handleLikeEmployee.bind(this, 1, user_id)}></i>
                        }
                    </div>
                </div>
                <div className="card-body ">
                    <h6 className="card-title name-employee"><Link to={"/profile/" + user_id}>{name}</Link></h6>
                    <p className="card-text">{short_description}</p>
            
                    <p className="card-text">
                        {starts}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default View;
