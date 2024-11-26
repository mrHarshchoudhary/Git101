import { useState,useRef } from "react";
import { IoBagAddSharp } from "react-icons/io5";
function AddTodo({onNewItem}) {
  const [todoName,setTodoName]=useState('');
  const[dueDate,setDueDate]=useState('');
  const noOfUpdates=useRef(0)
  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
    noOfUpdates.current+=1;
    
  }
  const handleDateChange=(event)=>{
setDueDate(event.target.value);
console.log(`noofupdate are: ${noOfUpdates.current}`);



  }
  const handleAddButtonCliked=(event)=>{
    event.preventDefault();
    onNewItem(todoName,dueDate)
    setDueDate("")
    setTodoName("")
  }
  return (
    <div class="container text-center">
      <form class="row kg-row" onSubmit={handleAddButtonCliked}>
       
        <div class="col-6">
          <input type="text" placeholder="Enter to todo" value={todoName} onChange={handleNameChange} />
        </div>
        <div class="col-4">
          <input type="date"   value={dueDate}onChange={handleDateChange}/>
        </div>
        <div class="col-2">
          <button type="submit" class="btn btn-success kg-button" onClick={handleAddButtonCliked}>
          <IoBagAddSharp />
          </button>
        </div>
       
      </form>
    </div>
  );
}
export default AddTodo;
