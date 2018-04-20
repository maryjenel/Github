const apiMiddleware = store => next => action => {
  switch (action.type) {
    case "FETCH_REPOS": {
      const { username } = action;
      fetch(`https://api.github.com/users/${username}/starred`)
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
          const action: Action = { type: "SET_REPO_LIST", repos };
          next(action);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default apiMiddleware;
