import TodosItem from "./TodosItem";

const TabItem = ({
  activeTab,
  changeTodoStatus,
  todos,
  deleteTodo,
  submitEditedTodo,
  setIsEditing,
  createNewTodo,
}) => {
  const filteredTasks =
    activeTab === "active"
      ? todos.filter((task) => !task.done)
      : activeTab === "complete"
      ? todos.filter((task) => task.done)
      : todos;

  return (
    <ul className="list-group mb-0">
      <TodosItem
        todos={filteredTasks}
        changeTodoStatus={changeTodoStatus}
        deleteTodo={deleteTodo}
        submitEditedTodo={submitEditedTodo}
        setIsEditing={setIsEditing}
        createNewTodo={createNewTodo}
      />
    </ul>
  );
};
export default TabItem;
