import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import "./App.css";

import TodoItems from "./component/TodoItems";
import { useState } from "react";
import WelcomeMessege from "./component/WelcomeMessege";
function App() {
  const initialtodoItems = [
    {
      name: "Buy Milk",
      duedate: "4/10/2023",
    },
    {
      name: "Go to college",
      duedate: "4/10/2023",
    },
    {
      name: "like video",
      duedate: "4/10/2023",
    },
  ];
  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, duedate: itemDueDate },
    ];
    setTodoItems(newTodoItems)
  };
  const handleDeeleteItem=(todoItemName)=>{
const newTodoItems=todoItems.filter(item=>item.name!==todoItemName)//me chahta hu jo equal he wo delete ho jaye bali to reh jaye 
setTodoItems(newTodoItems)


  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length==0&&<WelcomeMessege></WelcomeMessege>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeeleteItem}></TodoItems>
    </center>
  );
}

export default App;
