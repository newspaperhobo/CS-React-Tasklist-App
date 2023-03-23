import React from "react";

function InputField({id, type, value, onChangeFunction, children}) {
    // const id = "task-name";
    // const type = "text";
    // const value = taskName;
    // const onChangeFunction = handleTaskNameChange;
    return (
      <div>
      {/* children can be passed as prop, but do not have to be defined as a prop in app.js */}
        <label htmlFor={id}>{children}</label>
        <input
        // using variables to make component reusable- pass props from app.js to fill fields
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChangeFunction}
        />
      </div>
    );
}

export default InputField;