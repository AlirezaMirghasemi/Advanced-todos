const todoReducer = (todos, action) => {
  switch (action.type) {
    case "changeTodoStatus":
      return todos.map((t) =>
        t.id === action.payload.todo.id ? { ...t, done: !t.done } : t
      );
    case "newTodo":
      return [
        ...todos,
        {
          id: todos.length === 0 ? 1 : Math.max(...todos.map((t) => t.id)) + 1,
          text: action.payload.newTodoText,
          done: false,
        },
      ];
    case "deleteTodo":
      return todos.filter((t) => t.id !== action.payload.todo.id);
    case "editTodo":
      return todos.map((t) =>
        t.id === action.payload.todo.id
          ? { ...t, text: action.payload.newValue.trim() }
          : t
      );
    default:
      return todos;
  }
};

export default todoReducer;
