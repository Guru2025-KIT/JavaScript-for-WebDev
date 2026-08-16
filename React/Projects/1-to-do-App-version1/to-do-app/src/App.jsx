import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import { PastToDo1,PastToDo2} from "./components/Item1";
import './App.css';

function App() {
  return (
    <div>
    <AppName></AppName>
    <AddToDo></AddToDo>
    <PastToDo1></PastToDo1>
    <PastToDo2></PastToDo2>

    </div>
  );
}

export default App;
