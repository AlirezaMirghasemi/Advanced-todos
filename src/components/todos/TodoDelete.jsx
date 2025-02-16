const TodoDelete = ({todo,deleteTodo,editedTodoId}) => {
    console.log(editedTodoId);
  return (
    <button type="button" className="btn btn-outline-danger " disabled={editedTodoId != null} onClick={() => deleteTodo(todo)}>
      Delete
    </button>
  );
};
export default TodoDelete;
