import React from 'react';
import './style.css';

// components
import Header from '../Header/Header-controller'
import Banner from '../Banner/Banner-controller'
import HowWork from '../HowWork/HowWork-controller'

function View(){
    return(
        <div>
            <Header/>
            <Banner/>
            <HowWork />
          </div>
    );
}
export default View;
