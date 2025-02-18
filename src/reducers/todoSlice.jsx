import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    newTodo: (state, action) => {
      state.push({
        id: state.length === 0 ? 1 : Math.max(...state.map((t) => t.id)) + 1,
        text: action.payload,
        done: false,
      });
    },
    removeTodo: (state, action) => {
      return state.filter((t) => t.id === action.payload);
    },
    editTodo: (state, action) => {
      const { id, newValue } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) todo.text = newValue.trim();
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.done = !todo.done;
    },
  },
});
export const { newTodo, removeTodo, editTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
