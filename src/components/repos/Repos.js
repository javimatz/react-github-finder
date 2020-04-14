import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {

	const gihubContext = useContext(GithubContext);

	const { repos } = gihubContext;

  // Creates an RepoItem component for every repos array element
  return repos.map(repo =>  <RepoItem repo={repo} key={repo.id} /> ); 
}

export default Repos;
