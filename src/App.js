import Greeting from "./components/Greeting";
import TaskForm from "./components/TaskForm";
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Greeting text={"What's up, "} placeholder={'your name'}/>
      <TaskForm/>
    </div>
  );
}

export default App;
