import React, { useEffect, useState } from 'react';
import TaskForm from './Tasks/TaskForm';
import TaskItem from './Tasks/TaskItem';

const tasks = [
  {
    id: 1,
    name: "Learn React",
    status: "ACTIVE"
  },
  {
    id: 2,
    name: "Apply to jobs",
    status: "ACTIVE"
  },
  {
    id: 3,
    name: "Get an offer",
    status: "ACTIVE"
  }
];

function App() {
  const [workspaceId, setWorkspaceId] = useState(
    localStorage.getItem("workspaceId") || "12345678-aaaa-bbbb-cccc-987654321000"
  );
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    localStorage.setItem("workspaceId", "400589ad-0afe-4f9a-8c7d-f9a27c103c5c");
  }, [taskName]);

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  }

  return (
    <div className="App">
      <h1>Task List</h1>

      <TaskForm
        taskName={taskName}
        handleTaskNameChange={handleTaskNameChange}
      />

      <hr />

      <TaskItem tasks={tasks} />
    </div>
  );
}

export default App;
