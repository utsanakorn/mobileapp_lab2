import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function ToDoForm() {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Enter a new task" />
      <Button title="Add Task" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});
