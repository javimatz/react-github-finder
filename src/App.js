import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            { /* Container */ }
            <div className='container'>
              <Alert />
              { /* Router Switch */ }
              <Switch>
                { /* Root route */ }
                <Route 
                  exact 
                  path='/' 
                  render={ props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />  
                { /* About page route */ }
                <Route exact path='/about' component={About} />
                { /* User profile route */ }
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
            { /* End container */ }
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )  
}

export default App;
