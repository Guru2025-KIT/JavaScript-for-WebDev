import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import Item from "./components/Item";
import './App.css';

function App() {
  let toDoItems = [
    { name: "Buy Milk", dueDate: "4/10/2026" },
    { name: "Add to List", dueDate: "5/10/2026" },
    { name: "Drink Milk", dueDate: "6/10/2026" },
    { name: "Drink Water", dueDate: "7/10/2026" }
  ];

  return (
    <div>
      <AppName />
      <AddToDo />
      
      {/*Loop here and render an <Item /> for each object */}
      {toDoItems.map((item) => (
        <Item 
          key={item.name} // Keeps React fast and happy
          name={item.name} 
          dueDate={item.dueDate} 
        />
      ))}
    </div>
  );
}

export default App;
