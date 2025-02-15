import TodoDelete from "./TodoDelete";
import TodoEdit from "./todoEdit";

const TodosItem = ({ todos , changeTodoStatus,deleteTodo}) => {

  return todos.map((todo) => (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between border-0 mb-2 rounded"
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <div className="d-flex align-items-center">
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={todo.done}
          onChange={()=>changeTodoStatus(todo)}
        />
        <input
          type="text"
          value={todo.text}
          disabled
          className={`disabled-input ${todo.done ? "done" : ""}`}
        />
      </div>
      <div>
        <TodoEdit/>
        <TodoDelete todo={todo} deleteTodo={deleteTodo}/>
      </div>
    </li>
  ));
};
export default TodosItem;
