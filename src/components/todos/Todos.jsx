import { useEffect, useReducer, useState } from "react";
import TodosCreate from "./TodosCreate";
import TodosTab from "./TodosTab";
import todosReducer from "../../reducers/todoReducer";

const Todos = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [todos, todosDispatcher] = useReducer(
    todosReducer,
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const changeTodoStatus = (todo) => {
    todosDispatcher({
      type: "changeTodoStatus",
      payload: { todo },
    });
  };
  const [error, setError] = useState([]);
  const createNewTodo = (e) => {
    e.preventDefault();
    setError([]);
    const newTodoText = e.target.elements.newTodo.value.trim();
    if (!newTodoText) {
      setError([{ errorText: "Please Enter Task Title!!!" }]);
      return;
    }
    todosDispatcher({
      type: "newTodo",
      payload: { newTodoText },
    });
    e.target.elements.newTodo.value = "";
  };
  const deleteTodo = (todo) => {
    todosDispatcher({
      type: "deleteTodo",
      payload: {
        todo,
      },
    });
  };
  const submitEditedTodo = (todo, newValue) => {
    if (newValue.trim() === "") {
      setError([{ errorText: "Please Enter Task Title!!!" }]);
      return;
    }
    setError([]);
    todosDispatcher({
      type: "editTodo",
      payload: {
        todo,
        newValue,
      },
    });
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col col-xl-10 ">
            <div className="card ">
              <div className="card-body p-5 ">
                <TodosCreate
                  createNewTodo={createNewTodo}
                  errors={error}
                  isEditing={isEditing}
                />
                <TodosTab
                  changeTodoStatus={changeTodoStatus}
                  todos={todos}
                  deleteTodo={deleteTodo}
                  submitEditedTodo={submitEditedTodo}
                  setIsEditing={setIsEditing}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Todos;
