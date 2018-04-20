/* @flow */

import * as React from "react";
import { connect } from "react-redux";

import RepoList from "../components/RepoList";

type Props = {
  username: string,
  repos: Array<any>,
  fetchRepos: (username: string) => void
};

class RepoListContainer extends React.Component<Props, State> {
  componentWillMount() {
    this.props.fetchRepos(this.props.username);
  }

  render() {
    return <RepoList repos={this.props.repos} />;
  }
}

const mapStateToProps = state => ({
  repos: state.repos.repos
});

const mapDispatchToProps = dispatch => ({
  fetchRepos: username => {
    return dispatch({ type: "FETCH_REPOS", username });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoListContainer);
