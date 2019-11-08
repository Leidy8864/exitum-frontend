
import React from 'react';
import './style.css';

function View(props) {
    const{
        name,
        short_description,
        price_hour
    } = props
    return (
        <div>
            <div class="card text-center justify-content-center">
                <img src="https://www.w3schools.com/howto/img_avatar.png" class="image-employee mx-auto d-block" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">{name}</h5>
                    <p class="card-text">{short_description}</p>
                    <p class="card-text">
                        <img src={require('../../public/images/svg/estrella.svg')} width="20" className=""/>
                        <img src={require('../../public/images/svg/estrella.svg')} width="20" className=""/>
                        <img src={require('../../public/images/svg/estrella.svg')} width="20" className=""/>
                        <img src={require('../../public/images/svg/estrella.svg')} width="20" className=""/>
                        <img src={require('../../public/images/svg/estrella.svg')} width="20" className=""/>
                    </p>
                    <p className="price-employe">Desde S/. {price_hour}</p>

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
}
export default View;
