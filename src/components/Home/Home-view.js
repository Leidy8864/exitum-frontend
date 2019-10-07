import React from 'react';
import './style.css';

// components
import Header from '../Header/Header-controller'
import Banner from '../Banner/Banner-controller'

function View(){
    return(
        <div>
            <Header/>
            <Banner/>
          </div>
    );
}
export default View;
