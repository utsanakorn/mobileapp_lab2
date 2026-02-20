import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ToDoList() {
  return (
    <ScrollView>
      <View style={styles.item}>
        <Text>Finish Assignment</Text>
      </View>
      <View style={styles.item}>
        <Text>Buy Groceries</Text>
      </View>
      <View style={styles.item}>
        <Text>Read React Native Notes</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#e0e0e0",
    marginBottom: 10,
    borderRadius: 5,
  },
});
