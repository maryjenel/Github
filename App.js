/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import RepoListContainer from "./container/RepoListContainer";

type Repo = any;

type State = {
  repos: Array<Repo>
};

type Action = {
  type: "SET_REPO_LIST",
  repos: Array<Repo>
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

const reducers = combineReducers({
  repos: reposReducer
});

const store = createStore(reducers);

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Provider store={store}>
      <RepoListContainer username="eliperkins" />
    </Provider>
  </SafeAreaView>
);

export default App;
