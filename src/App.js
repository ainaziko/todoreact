import { useEffect, useState } from "react";
import Greeting from "./components/Greeting";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './styles/index.css';
import { saveTaskToLocalStorage, getTasksFromLocalStorage, deleteTaskFromLocalStorage } from "./utils/localStorage";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
        const storedTasks = getTasksFromLocalStorage();
        if (storedTasks) {
            setTasks(storedTasks);
        }
    } catch (error) {
        console.error("Error loading tasks from local storage:", error);
    }
}, []);


const handleAddTask = (task) => {
  setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, task];
      saveTaskToLocalStorage(updatedTasks);
      return updatedTasks;
  });
};

  const handleStrikeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => {
        const updatedTasks = prevTasks.filter(task => task.id !== taskId);
        deleteTaskFromLocalStorage(taskId);
        return updatedTasks;
    });
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
