import { useState } from "react";
import TabItem from "./TabItem";

const TodosTab = ({
  todos,
  submitEditedTodo,
  setIsEditing,
  createNewTodo
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
        todos={todos}
        submitEditedTodo={submitEditedTodo}
        setIsEditing={setIsEditing}
        createNewTodo={createNewTodo}
      />
    </>
  );
};
export default TodosTab;
