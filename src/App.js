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

return (
    <main>
        <TaskForm onSubmit={handleAddTask} />
        <p className="uppercase">TODO LIST</p>
        <TaskList
            tasks={tasks}
            onStrikeTask={handleStrikeTask}
            onEditTask={handleStrikeTask}
            onDeleteTask={handleStrikeTask}
        />
    </main>
);
}

export default App;
