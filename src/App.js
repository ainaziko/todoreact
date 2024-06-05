import Greeting from "./components/Greeting";
import TaskForm from "./components/TaskForm";
import './styles/index.css';

function App() {

  const handleAddTask = (task) => {
    console.log(task);
  }

  return (
    <div className="App">
      <Greeting text={"What's up, "} placeholder={'your name'}/>
      <TaskForm onSubmit={handleAddTask}/>
    </div>
  );
}

export default App;
