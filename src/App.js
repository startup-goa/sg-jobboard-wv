import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
/* import Employee from './employee';
import Department from './department'; */
import ViewCompanyDetails from '../src/pages/viewCompanyDetails';
import FindJobs from '../src/pages/findJobs';

export default function App() {


  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to='/findjobs' />
        </Route>
        <FindJobs path="/findjobs" component={FindJobs} />
        <ViewCompanyDetails path="/companies" component={ViewCompanyDetails} />

      </Switch>
    </Router>

  )


}

