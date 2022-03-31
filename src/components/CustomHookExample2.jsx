import { useState } from "react";
import useLoacalStorage from "../hooks/useLoacalStorage";

function CustomHookExample2() {
  const [task, setTask] = useLoacalStorage("task", "");
  const [tasks, setTasks] = useLoacalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            className="form-contro"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <hr />

      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  );
}

export default CustomHookExample2;
