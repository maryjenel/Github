/* @flow */

import * as React from "react";

import RepoList from "../components/RepoList";

type Props = {
  username: string
};

type State = {
  repos: Array<any>
};

class RepoListContainer extends React.Component<Props, State> {
  state = { repos: [] };

  componentWillMount() {
    fetch(`https://api.github.com/users/${this.props.username}/starred`)
      .then(response => response.json())
      .then(repoData =>
        repoData.map(
          ({ name, owner, description, stargazers_count, language }) => ({
            name,
            description,
            language,
            owner: owner.login,
            numberOfStars: stargazers_count
          })
        )
      )
      .then(repos => {
        this.setState({ repos });
      });
  }

  render() {
    // this.props.repos from redux!
    return <RepoList repos={this.state.repos} />;
  }
}

export default RepoListContainer;
