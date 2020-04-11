import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);	
	}

	static propTypes = {
		loading: PropTypes.bool,
		user: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired
	}

	render() { 
		const { 
		  name,
		  avatar_url,
		  location,
		  html_url,
		  bio,
		  blog,
		  login,
		  followers,
		  following,
		  public_repos,
		  public_gists,
		  hireable
		} = this.props.user;

		const { loading } = this.props;

		if (loading) return <Spinner />;

		return <div>{this.props.user.name}</div>;
  }
}

export default User;
