import { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function addTask() {
    if (input.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), title: input, completed: false }]);
    setInput('');
  }

  function toggleTaskCompletion(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  return (
    <div className="task-container">
      <h1>Task Manager</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <span className={task.completed ? 'completed' : ''}>
              {task.title}
            </span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p className="empty-message">No tasks yet. Add one above.</p>}
    </div>
  );
}

export default TaskManager;