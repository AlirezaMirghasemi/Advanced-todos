const TabItem = ({ activeTab }) => {
  const allTasks = [
    { id: 1, text: "Cras justo odio", done: true },
    { id: 2, text: "Dapibus ac facilisis in", done: true },
    { id: 3, text: "Morbi leo risus", done: false },
    { id: 4, text: "Porta ac consectetur ac", done: false },
    { id: 5, text: "Vestibulum at eros", done: false },
  ];

  const filteredTasks =
    activeTab === "active"
      ? allTasks.filter((task) => !task.done)
      : activeTab === "complete"
      ? allTasks.filter((task) => task.done)
      : allTasks;

  return (
    <ul className="list-group mb-0">
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
          style={{ backgroundColor: "#f4f6f7" }}
        >
          <input
            className="form-check-input me-2"
            type="checkbox"
            checked={task.done}
          />
          {task.done ? <s>{task.text}</s> : task.text}
        </li>
      ))}
    </ul>
  );
};
export default TabItem;
