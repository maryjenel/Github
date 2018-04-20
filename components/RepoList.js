/* @flow */

import * as React from "react";
import { FlatList, Text } from "react-native";

import Repo from "./Repo";

type Props = {
  repos: Array<any>
};

const RepoList = ({ repos }: Props) => (
  <FlatList
    extraData={repos}
    data={repos}
    renderItem={({ item }) => <Repo {...item} />}
    keyExtractor={(item, index) => `${item.name}-${index}`}
  />
);

export default RepoList;
