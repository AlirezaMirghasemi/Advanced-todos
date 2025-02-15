import { useState } from "react";
import TodosCreate from "./TodosCreate";
import TodosTab from "./TodosTab";

const Todos = () => {
  const [allTasks, setAllTasks] = useState([
    { id: 1, text: "Cras justo odio", done: true },
    { id: 2, text: "Dapibus ac facilisis in", done: true },
    { id: 3, text: "Morbi leo risus", done: false },
    { id: 4, text: "Porta ac consectetur ac", done: false },
    { id: 5, text: "Vestibulum at eros", done: false },
  ]);
  const changeTodoStatus = (todo) => {
    setAllTasks(
      allTasks.map((t) => (t.id === todo.id ? { ...t, done: !t.done } : t))
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

    setAllTasks([
      ...allTasks,
      {
        id:
          allTasks.length === 0
            ? 1
            : Math.max(...allTasks.map((t) => t.id)) + 1,
        text: newTodoText,
        done: false,
      },
    ]);
    e.target.elements.newTodo.value = "";
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col col-xl-10 ">
            <div className="card ">
              <div className="card-body p-5 ">
                <TodosCreate createNewTodo={createNewTodo} errors={error} />
                {console.log(error)}
                <TodosTab
                  changeTodoStatus={changeTodoStatus}
                  allTasks={allTasks}
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
