import React from "react";

const Task = ({ task, index, toggleStatus }) => {
  const handleToggleStatus = () => {
    toggleStatus(index);
  };

  return (
    <div className="task-item">
      <div className="task-cell task-no">{index + 1}</div>
      <div className="task-cell task-description">{task.description}</div>
      <div className="task-cell task-assignee">{task.assignee}</div>
      <div className="task-cell task-date">
        {task.status === "Completed"
          ? "-"
          : task.deadline
          ? task.deadline.toLocaleDateString()
          : "-"}
      </div>
      <div className="task-cell">{task.status}</div>
      <div className="task-actions">
        <button className="toggle-button" onClick={handleToggleStatus}>
          Toggle Status
        </button>
      </div>
    </div>
  );
};

export default Task;
