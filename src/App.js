import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
/* import Employee from './employee';
import Department from './department'; */
import ViewCompanyDetails from '../src/pages/viewCompanyDetails';
import FindJobs from '../src/pages/findJobs';
import axios from 'axios';
import config from './config.json'

axios.defaults.baseURL = config.BASE_URL;
export default function App() {


  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to='/jobs' />
        </Route>
        <FindJobs path="/jobs" component={FindJobs} />
        <ViewCompanyDetails path="/companies" component={ViewCompanyDetails} />

      </Switch>
    </Router>

  )


}

