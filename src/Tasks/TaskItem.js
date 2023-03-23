import React from 'react';

function TaskItem({ tasks, handleTaskDelete }) {
  return tasks.map((task) => (
    <ul key={task.id}>
      <li>Name: {task.name}</li>
      <li>Status: {task.status}</li>
        <li>
          <button type="button" onClick={() => handleTaskDelete(task.id)}>
            Delete
          </button>
      </li>
    </ul>
  ));
}

export default TaskItem;