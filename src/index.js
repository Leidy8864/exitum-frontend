import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home-controller';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './redux/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'

const Root = () => (
    <Provider store = { store }>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
