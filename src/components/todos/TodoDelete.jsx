const TodoDelete = ({todo,deleteTodo}) => {
  return (
    <button type="button" className="btn btn-outline-danger " onClick={()=>deleteTodo(todo)}>
      Delete
    </button>
  );
};
export default TodoDelete;
