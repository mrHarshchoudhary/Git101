import {  useRef } from "react";
import { IoBagAddSharp } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState('');
  // const [dueDate, setDueDate] = useState('');
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonCliked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    // Clear input fields
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    // Call parent function with new item data
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonCliked}>
        <div className="col-6">
          <input type="text" ref={todoNameElement} placeholder="Enter todo" />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoBagAddSharp />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
