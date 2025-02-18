import { useEffect, useReducer, useState } from "react";
import TodosCreate from "./TodosCreate";
import TodosTab from "./TodosTab";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, newTodo, toggleTodo ,removeTodo} from "../../reducers/todoSlice";

const Todos = () => {
    const dispatch =useDispatch();
    const todos = useSelector(state=>state.todos);

  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const changeTodoStatus = (todo) => {
    dispatch(toggleTodo(todo.id));
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

    dispatch(newTodo(newTodoText));
    e.target.elements.newTodo.value = "";
  };

  const submitEditedTodo = (todo, newValue) => {
    if (newValue.trim() === "") {
      setError([{ errorText: "Please Enter Task Title!!!" }]);
      return;
    }
    setError([]);
    dispatch(editTodo({id:todo.id,newValue}))
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
                  submitEditedTodo={submitEditedTodo}
                  setIsEditing={setIsEditing}
                  createNewTodo={createNewTodo}
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
