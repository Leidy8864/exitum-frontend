import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AllRoutes from './Routes/AllRoutes';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/umd/popper.min.js'
import Home from './components/Home/Home-controller'
import Dashboardoffice from './components/Dashboardoffice/Dashboardoffice-controller';
import { ProtectedRoute } from './Routes/ProtectedRoute';

// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <ProtectedRoute exact path="/dashboard" component={Dashboardoffice} />
//         <Route path="*" component={() => "404 NOT FOUND"} />
//       </Switch>
//     </div>
//   );
// }
ReactDOM.render(
    <AllRoutes />
, document.getElementById('root'));

serviceWorker.unregister();
    