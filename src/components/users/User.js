import React, { Component } from 'react';

class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);	
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

		return <div>{this.props.user.name}</div>;
  }
}

export default User;
