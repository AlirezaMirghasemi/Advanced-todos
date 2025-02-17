import { useEffect, useState } from "react";
import TodosCreate from "./TodosCreate";
import TodosTab from "./TodosTab";

const Todos = () => {
  const [isEditing, setIsEditing] = useState(false);




  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const changeTodoStatus = (todo) => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, done: !t.done } : t))
    );
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
    setTodos([
      ...todos,
      {
        id:
          todos.length === 0
            ? 1
            : Math.max(...todos.map((t) => t.id)) + 1,
        text: newTodoText,
        done: false,
      },
    ]);
    e.target.elements.newTodo.value = "";
  };
  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const submitEditedTodo = (todo, newValue) => {
    if (newValue.trim() === "") {
      setError([{ errorText: "Please Enter Task Title!!!" }]);
      return;
    }
    setError([]);
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, text: newValue.trim() } : t
      )
    );
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
