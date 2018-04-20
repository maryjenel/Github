/* @flow */

type Repo = any;

type State = {
  repos: Array<Repo>
};

type Action =
  | {
      type: "SET_REPO_LIST",
      repos: Array<Repo>
    }
  | {
      type: "FETCH_REPOS",
      username: string
    };

const reposReducer = (state: State = { repos: [] }, action: Action): State => {
  switch (action.type) {
    case "SET_REPO_LIST": {
      return { repos: action.repos };
    }
    default:
      return state;
  }
};

export default reposReducer;
