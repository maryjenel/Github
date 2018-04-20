/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import RepoListContainer from "./container/RepoListContainer";

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Provider store={store}>
      <RepoListContainer username="maryjenel" />
    </Provider>
  </SafeAreaView>
);

export default App;
