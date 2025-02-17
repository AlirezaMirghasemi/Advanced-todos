import { useState } from "react";
import TabItem from "./TabItem";

const TodosTab = ({
  changeTodoStatus,
  todos,
  deleteTodo,
  submitEditedTodo,
  setIsEditing,
}) => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <ul className="nav nav-tabs mb-4" id="ex1" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "active" ? "active" : ""}`}
            onClick={() => setActiveTab("active")}
          >
            Active
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "complete" ? "active" : ""}`}
            onClick={() => setActiveTab("complete")}
          >
            Completed
          </button>
        </li>
      </ul>
      <TabItem
        activeTab={activeTab}
        changeTodoStatus={changeTodoStatus}
        todos={todos}
        deleteTodo={deleteTodo}
        submitEditedTodo={submitEditedTodo}
        setIsEditing={setIsEditing}
      />
    </>
  );
};
export default TodosTab;
