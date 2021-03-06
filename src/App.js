import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "5th Feb at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Online Test",
      day: "7th Feb at 5:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping Mall",
      day: "9th Mar at 1:30pm",
      reminder: false,
    },
  ]);

  //Add task
  const addTask = (task) => {
    let id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAddToggle={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks assigned"
      )}
    </div>
  );
}

// Points to remember:
// 1. 'States' get passed down & 'Actions' gets passed up.

export default App;
