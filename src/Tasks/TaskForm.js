import React from 'react';

function TaskForm({ taskName, handleTaskNameChange }) {
  return (
    <React.Fragment>
      <label htmlFor="task-name">Task Name:</label>
      <input
        id="task-name"
        name="task-name"
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
      />
    </React.Fragment>
  );
}

export default TaskForm;