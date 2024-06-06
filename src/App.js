import { useState } from "react";
import Greeting from "./components/Greeting";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './styles/index.css';

function App() {
  const [tasks, setTasks] = useState([]);


  const handleAddTask = (task) => {
    //store in local storage
    setTasks([...tasks, task])
    console.log(task);
  }

  const handleStrikeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }; 


  return (
      <main>
          <TaskForm onSubmit={handleAddTask} />
          <p className="uppercase">TODO LIST</p>
          <TaskList
              tasks={tasks}
              onStrikeTask={handleStrikeTask}
              onEditTask={handleStrikeTask}
              onDeleteTask={handleDeleteTask}
          />
      </main>
  );
}

export default App;
