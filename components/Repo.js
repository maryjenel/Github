/* @flow */

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  name: string,
  owner: string,
  description: string,
  numberOfStars: number,
  language: string
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16
  },
  container: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline"
  }
});

const Repo = ({ name, owner, description, numberOfStars, language }: Props) => {
  const { title, subtitle, header, container } = styles;

  return (
    <View style={container}>
      <View style={header}>
        <Text style={title}>
          {name}/{owner}
        </Text>
        <Text style={subtitle}>🌟 {numberOfStars}</Text>
      </View>
      <Text style={subtitle}>{description}</Text>
      <Text style={subtitle}>{language}</Text>
    </View>
  );
};

export default Repo;
