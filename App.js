import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextBase,
} from "react-native";

export default function App() {
  const [flexDirection, setFlexDirection] = useState("row");

  return (
    <CustomLayout
      title="flexDirection"
      values={["row", "column", "row-reverse", "column-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setFlexDirection}
    >
      <View style={[styles.box, { backgroundColor: "red" }]}></View>
      <View style={[styles.box, { backgroundColor: "orange" }]}></View>
      <View style={[styles.box, { backgroundColor: "yellow" }]}></View>
      <View style={[styles.box, { backgroundColor: "green" }]}></View>
      <View style={[styles.box, { backgroundColor: "blue" }]}></View>
      <View style={[styles.box, { backgroundColor: "pink" }]}></View>
      <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
      <View style={[styles.box, { backgroundColor: "black" }]}></View>
      <View style={[styles.box, { backgroundColor: "white" }]}></View>
      <StatusBar style="auto" />
    </CustomLayout>
  );
}

const CustomLayout = ({
  title,
  values,
  selectedValue,
  setSelectedValue,
  children,
}) => (
  <View style={{padding: 20, flex: 1}}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selectedButton,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedButtonLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
      style={[styles.container, { [title]: selectedValue, flexWrap: "wrap" }]}
    >
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    minWidth: "48%",
    backgroundColor: "oldlace",
    borderRadius: 5,
    marginHorizontal: "1%",
    marginBottom: 5,
    paddingVertical: 10,
  },
  selectedButton: {
    backgroundColor: "coral",
  },
  buttonLabel: {
    color: "coral",
    textAlign: "center",
  },
  selectedButtonLabel: {
    color: "white",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 18,
    marginTop: 18,
    color: 'red'
  },
});
