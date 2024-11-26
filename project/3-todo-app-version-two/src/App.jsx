import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import "./App.css"

import TodoItems from "./component/TodoItems";
function App() {
  const todoItems=[{
    name:"Buy Milk",
    duedate:"4/10/2023",
  },
  {
  name:"Go to college",
  duedate:"4/10/2023",
  },
  {
    name:"like video",
    duedate:"4/10/2023",
    }
]
  return (
    <center classNmae="todo-container">
     <AppName></AppName>
     <AddTodo></AddTodo>
     <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
