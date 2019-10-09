import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AllRoutes from './components/Routes/AllRoutes';
import * as serviceWorker from './serviceWorker';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'


ReactDOM.render(<AllRoutes />, document.getElementById('root'));

serviceWorker.unregister();
