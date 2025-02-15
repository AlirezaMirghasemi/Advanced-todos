import { useState } from "react";
import TodoDelete from "./TodoDelete";
import TodoEdit from "./todoEdit";

const TodosItem = ({ todos, changeTodoStatus, deleteTodo }) => {

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
        >
          <input
            className="form-check-input me-2"
            type="checkbox"
            checked={todo.done}
            onChange={() => changeTodoStatus(todo)}
          />
          <input
            type="text"
            defaultValue={todo.text}
            disabled
            className={`flex-grow-1 disabled-input ${todo.done ? "done" : ""} `}
            name="todoTitle"
          />
          <div className="ms-auto d-flex">
           <TodoEdit/>
            <TodoDelete todo={todo} deleteTodo={deleteTodo} />
          </div>
        </form>
      </div>
    </li>
  ));
};
export default TodosItem;
