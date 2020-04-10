import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({title, icon}) => {
  return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='/about'>About</a>
				</li>
			</ul>
		</nav>
  )
}

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fa fa-github'
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
