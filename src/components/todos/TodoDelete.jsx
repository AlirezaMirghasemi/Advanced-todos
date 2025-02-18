import { useDispatch } from "react-redux";
import { removeTodo } from "../../reducers/todoSlice";

const TodoDelete = ({ todo, editedTodoId }) => {
    const dispatch =useDispatch();
    const deleteTodo = (todo) => {
        dispatch(removeTodo(todo));
      };
  return (
    <button
      type="button"
      className="btn btn-outline-danger "
      disabled={editedTodoId != null}
      onClick={() => deleteTodo(todo)}
    >
      Delete
    </button>
  );
};
export default TodoDelete;
