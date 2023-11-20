import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/todoListSlice";
export default function EditTask({ navigation, route }) {
  const task = route.params?.item.name;
  const id = route.params?.item.id;
  const dispatch = useDispatch();
  const [editTask, setEditTask] = useState(task);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EditTask</Text>
      <TextInput
        style={styles.input}
        value={editTask}
        onChangeText={setEditTask}
      ></TextInput>
      <Pressable
        style={styles.addButton}
        onPress={() => {
          dispatch(
            updateTodo({
              id: id,
              name: editTask,
            })
          );
          navigation.navigate("Todo");
        }}
      >
        <Text style={styles.addButtonText}>Update</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
