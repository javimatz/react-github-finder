import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  // Creates an RepoItem component for every repos array element
  return repos.map(repo =>  <RepoItem repo={repo} key={repo.id} /> ); 
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired
}

export default Repos;
