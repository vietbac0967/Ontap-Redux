import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodoList } from "../redux/selectors";
import { FlatList } from "react-native";
import { addTodo, deleteTodo, updateTodo } from "../redux/todoListSlice";
export default function TodoList({ navigation }) {
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();
  const [editTask, setEditTask] = useState(false);
  const [task, setTask] = useState("");
  const renderItem = ({ item }) => (
    <View style={styles.task}>
      <Text style={styles.itemList}>{item.name}</Text>
      <View style={styles.taskButtons}>
        <Pressable onPress={() => navigation.navigate("Edit", { item:item})}>
          <Text style={styles.editButton}>Edit</Text>
        </Pressable>
        <Pressable onPress={() => dispatch(deleteTodo(item.id))}>
          <Text style={styles.deleteButton}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Geeksforgeeks</Text>
      <Text style={styles.title}>ToDo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Pressable
        style={styles.addButton}
        onPress={() => {
          dispatch(
            addTodo({
              id: todoList.length + 1,
              name: task,
            })
          );
          setTask("");
        }}
      >
        <Text style={styles.addButtonText}>Add Task</Text>
      </Pressable>
      <FlatList data={todoList} renderItem={renderItem}></FlatList>
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
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 7,
    color: "green",
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
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
  },
  itemList: {
    fontSize: 19,
  },
  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});
