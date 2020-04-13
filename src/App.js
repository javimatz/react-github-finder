import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };

/*
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }
*/

  // Search Github Users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({ users: res.data.items, loading: false });
  }
  
  // Get single Github user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({ user: res.data, loading: false });
  }

  // Get user repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    this.setState({ repos: res.data, loading: false });
  }

  // Clear Users
  clearUsers = (text) => {
    this.setState({ users: [], loading: false });
  }

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({alert: { msg, type } });
    setTimeout( () => this.setState({alert: null}), 5000 );
  }

  render() {

    const { users, user, repos, loading } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          { /* Container */ }
          <div className='container'>
            <Alert alert={this.state.alert} />
            { /* Router Switch */ }
            <Switch>
              { /* Root route */ }
              <Route 
                exact 
                path='/' 
                render={ props => (
                  <Fragment>
                    <Search 
                      searchUsers = {this.searchUsers} 
                      clearUsers  = {this.clearUsers}
                      showClear   = { users.length > 0 ? true : false }  
                      setAlert    = {this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />  
              { /* About page route */ }
              <Route exact path='/about' component={About} />
              { /* User profile route */ }
              <Route exact path='/user/:login' render={ props => (
                  <User 
                    { ...props } 
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos} 
                    user={user} 
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
          { /* End container */ }
        </div>
      </Router>
    )
  }
}

export default App;
