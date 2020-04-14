import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';

import GithubState from './context/github/GithubState';

import './App.css';

const App = () => {
  
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Search Github Users
  
  // Get single Github user

  // Get user repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    setRepos(res.data);
    setLoading(false);
  }

  // Clear Users
  
  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout( () => setAlert(null), 5000 );
  }

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          { /* Container */ }
          <div className='container'>
            <Alert alert={alert} />
            { /* Router Switch */ }
            <Switch>
              { /* Root route */ }
              <Route 
                exact 
                path='/' 
                render={ props => (
                  <Fragment>
                    <Search 
                      setAlert    = {showAlert}
                    />
                    <Users />
                  </Fragment>
                )}
              />  
              { /* About page route */ }
              <Route exact path='/about' component={About} />
              { /* User profile route */ }
              <Route exact path='/user/:login' render={ props => (
                  <User 
                    { ...props } 
                    getUserRepos={getUserRepos} 
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
          { /* End container */ }
        </div>
      </Router>
    </GithubState>
  )  
}

export default App;
