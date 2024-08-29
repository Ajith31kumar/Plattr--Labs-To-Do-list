import React from 'react';

const AddTask = ({ handleSubmit, editid, task, setTask }) => {
  return (
    <div className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder={editid ? "Edit task" : "Add a new task"}
        />
        <button type="submit">{editid ? "Update Task" : "Add Task"}</button>
      </form>
    </div>
  );
};

export default AddTask;
