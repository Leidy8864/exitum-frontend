import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home-controller';
import { Provider } from 'react-redux';

import Dashboardoffice from '../components/Dashboardoffice/Dashboardoffice-controller';
import ChooseProfileController from '../components/ChooseProfile/ChooseProfile-controller';
import Advertisement from '../components/Advertisement/Advertisement-controller';
import store from '../redux/store';
import ChooseProfileRoute from './ChooseProfileRoute';
import ProtectedRoute from './ProtectedRoute';

class AllRoutes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute exact path="/dashboard" component={Dashboardoffice} />
            <ChooseProfileRoute exact path="/choose-profile" component={ChooseProfileController} />
            <Route exact path="/advertisement" component={Advertisement} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default AllRoutes;