import { useState } from "react";
import TodoDelete from "./TodoDelete";
import TodoEdit from "./todoEdit";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../reducers/todoSlice";

const TodosItem = ({
  todos,
  submitEditedTodo,
  setIsEditing,
}) => {
  const [editedTodoId, setEditedTodoId] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");
  const dispatch =useDispatch();


  const changeTodoStatus = (todo) => {
    dispatch(toggleTodo(todo.id));
  };
  const setEditModeState = (e, todo) => {
    e.preventDefault();
    if (editedTodoId === todo.id) {
      submitEditedTodo(todo, editedTodo);
      setIsEditing(false);
      setEditedTodoId(null);
    } else {
      setEditedTodoId(todo.id);
      setEditedTodo(todo.text);
      setIsEditing(true);
    }
  };
  return todos.map((todo) => (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between border-0 mb-2 rounded"
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <div className="d-flex align-items-center w-100">
        <form
          action=""
          className="d-flex w-100"
          onSubmit={(e) => setEditModeState(e, todo)}
        >
          <input
            className="form-check-input me-2"
            type="checkbox"
            checked={todo.done}
            onChange={() => changeTodoStatus(todo)}
            disabled={editedTodoId == todo.id ? true : false}
          />
          <input
            type="text"
            value={editedTodoId === todo.id ? editedTodo : todo.text}
            onChange={(e) => setEditedTodo(e.target.value)}
            disabled={editedTodoId == todo.id ? false : true}
            className={`flex-grow-1 ${
              editedTodoId != todo.id ? "disabled-input" : ""
            } ${todo.done ? "done" : ""} `}
            name="todoTitle"
          />
          <div className="ms-auto d-flex">
            <TodoEdit todo={todo} />
            <TodoDelete
              todo={todo}
              editedTodoId={editedTodoId}
            />
          </div>
        </form>
      </div>
    </li>
  ));
};
export default TodosItem;
