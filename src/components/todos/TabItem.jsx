import TodosItem from "./TodosItem";

const TabItem = ({ activeTab,changeTodoStatus,allTasks }) => {


  const filteredTasks =
    activeTab === "active"
      ? allTasks.filter((task) => !task.done)
      : activeTab === "complete"
      ? allTasks.filter((task) => task.done)
      : allTasks;

  return (
    <ul className="list-group mb-0">
      <TodosItem todos={filteredTasks} changeTodoStatus={changeTodoStatus} />
    </ul>
  );
};
export default TabItem;
