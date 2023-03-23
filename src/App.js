import React, { useEffect, useState } from 'react';
// import TaskForm from './Tasks/TaskForm';
import InputField from './Shared/InputField';
import TaskItem from './Tasks/TaskItem';
// require('dotenv').config();

const CLOCKIFY_BASE_URL = "https://api.clockify.me/api/v1/";
const WORKSPACE_ID = "641b90268a58ab6e4234ae19";
const PROJECT_ID = "641b94ba50f86e7cac775876";

function App() {
// ADD useState for tasks, init to empty array
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
// ADD useState for isLoading, init to false
  const [isLoading, setIsLoading] = useState(false);
// ADD useState for errorMessage, init to string
  const [errorMessage, setErrorMessage] = useState("");
  const apiTaskUrl = `${CLOCKIFY_BASE_URL}/workspaces/${WORKSPACE_ID}/projects/${PROJECT_ID}/tasks`;
  const apiHeaders = {
    "Content-Type": "application/json",
    // x-api-key is likely dictated by clockify
    "x-api-key": process.env.REACT_APP_CLOCKIFY_API_KEY
  };

  useEffect(() => {
    localStorage.setItem("workspaceId", WORKSPACE_ID);
  }, [taskName]);

useEffect(() => {
  setIsLoading(true);
  fetch(apiTaskUrl, { headers: apiHeaders}) 
    .then(res => res.json())
    .then(result => {
      setTasks(result);
      setIsLoading(false);
    })
    // err.response.data.error is an object and set up by Clockify to access error message
    .catch(err => setErrorMessage(err.response.data.error))
},[]);

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  }
  const handleUserNameChange = (event) => {
    console.log("something")
  }

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    // create a variable newTasks --> target the task state --> filter through the tasks via the task id (which passes the test of NOT equaling the taskID itself)
    setTasks(newTasks)
  }
  
  
  
  return (
    <div className="App">
      <h1>Task List</h1>
      <InputField
        id="task-name"
        type="text"
        value={taskName}
        onChangeFunction={handleTaskNameChange}
        // Another example where useRef is used a lot is when using forms. When a page with a form / input opens up, we would like to have the input focused already so we can start typing in it without even clicking it. useRef in React helps us select input field as a ref and using current property of the ref, we can accomplish that.
        isFocused
      >
        {/* to pass children to component, add component closing tag and change text or other tags in between */}
        Task Name:
      </InputField>

      <hr />

      {errorMessage && <p>Something went wrong: {errorMessage}</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TaskItem tasks={tasks} handleTaskDelete={handleTaskDelete} />
      )}
      {/* <TaskItem tasks={tasks} /> */}
    </div>
  );
}

export default App;
