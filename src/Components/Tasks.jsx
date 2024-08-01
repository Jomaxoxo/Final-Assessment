import React, { useState } from "react";
import Task from "./Task";
import SearchFilter from "./SearchFilter";
import "../App.css";

const taskDescriptions = [
  "Sweep the floor",
  "Clean the desks",
  "Empty the trash",
  "Arrange documents/folders",
  "Arrange chairs",
  "Put things back",
  "Clean the windows",
  "Monitor cleanliness",
  "Waxing the floor",
  "Organize books",
];

const assignees = ["John", "Jane", "Mike", "Lisa"];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getRandomDeadline = () => {
  const today = new Date();
  const deadline = new Date(today);
  deadline.setDate(today.getDate() + Math.floor(Math.random() * 30) + 1);
  return deadline;
};

const generateTasks = () => {
  const shuffledDescriptions = shuffleArray([...taskDescriptions]);
  const shuffledAssignees = shuffleArray([...assignees]);

  const tasks = shuffledDescriptions.map((description, index) => ({
    description,
    assignee: shuffledAssignees[index % shuffledAssignees.length],
    deadline: null,
    status: index < 6 ? "Pending" : "Completed",
  }));

  tasks.forEach((task) => {
    if (task.status === "Pending") {
      task.deadline = getRandomDeadline();
    }
  });

  return tasks;
};

const Tasks = () => {
  const [tasks, setTasks] = useState(generateTasks());
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const toggleStatus = (index) => {
    const updatedTasks = [...filteredTasks];
    const task = updatedTasks[index];
    if (task.status === "Pending") {
      task.status = "Completed";
      task.deadline = null;
    } else {
      task.status = "Pending";
      task.deadline = getRandomDeadline();
    }
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="tasks-container">
      <h2>Task Details</h2>
      <SearchFilter tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <div className="task-list">
        <div className="task-header">
          <div className="header-cell">No.</div>
          <div className="header-cell">Task Description</div>
          <div className="header-cell">Assignee</div>
          <div className="header-cell">Deadline</div>
          <div className="header-cell">Status</div>
          <div className="header-cell">Actions</div>
        </div>
        {filteredTasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            toggleStatus={() => toggleStatus(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
