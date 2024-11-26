import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import Todoitem from "./component/Todoitem1";
import Todoitem2 from "./component/Todoitem2";
import "./App.css"
function App() {
  return (
    <center classNmae="todo-container">
     <AppName></AppName>
     <AddTodo></AddTodo>
     <div className="item-container">
     <Todoitem></Todoitem>
     <Todoitem2></Todoitem2>
     </div>
    </center>
  );
}

export default App;
