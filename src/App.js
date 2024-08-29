import React, { useState, useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import FilterBar from './components/FilterBar';
import Header from './components/Header';

function App() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasklist")) || [];
    } catch (e) {
      console.error("Error parsing tasklist from localStorage", e);
      return [];
    }
  });
  const [editid, setEditid] = useState(0);
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("theme")) || "medium";
    } catch (e) {
      console.error("Error parsing theme from localStorage", e);
      return "medium";
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date();

    if (editid) {
      const updatedTasklist = tasklist.map((e) =>
        e.id === editid
          ? { ...e, name: task, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }
          : e
      );
      setTasklist(updatedTasklist);
      setEditid(0);
    } else if (task) {
      setTasklist([
        ...tasklist,
        {
          id: date.getTime(),
          name: task,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
          completed: false, // Add completed status
        },
      ]);
    }

    setTask("");
  };

  const handleEdit = (id) => {
    const selectedTask = tasklist.find((task) => task.id === id);
    setTask(selectedTask.name);
    setEditid(id);
  };

  const handleDelete = (id) => {
    if (id === 'all') {
      setTasklist([]);
    } else {
      setTasklist(tasklist.filter((task) => task.id !== id));
    }
  };

  

  const handleToggleComplete = (id) => {
    setTasklist(
      tasklist.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasklist.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <div className="container">
        <AddTask handleSubmit={handleSubmit} editid={editid} task={task} setTask={setTask} />
        <FilterBar currentFilter={filter} onFilterChange={setFilter} />
        <ShowTask
          tasklist={filteredTasks}
          setTasklist={setTasklist}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleToggleComplete={handleToggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
