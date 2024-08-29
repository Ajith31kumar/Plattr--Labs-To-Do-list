import React from 'react';

const ShowTask = ({ tasklist, handleEdit, handleDelete, handleToggleComplete }) => {
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      handleDelete('all');
    }
  };

  return (
    <section className='showTask'>
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </span>
        <span className="clearAll" onClick={handleClearAll}>Clear All</span>
      </p>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span className={task.completed ? "completed" : ""}>
              {task.name}
            </span>
            <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
            <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShowTask;
