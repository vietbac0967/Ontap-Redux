import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [
    { id: 1, name: "Code Javascript" },
    { id: 2, name: "Code React" },
    { id: 3, name: "Code Redux" },
  ],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    },
    getById: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id === action.payload);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo,getById } = todoListSlice.actions;

export default todoListSlice.reducer;
