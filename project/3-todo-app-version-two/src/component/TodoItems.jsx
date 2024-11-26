import Todoitem from "./Todoitem"
import styles from "./TodoItems.module.css";
const TodoItems=({todoItems})=>{
return (

<div classNameName={styles.itemsContainer}>
  {todoItems.map(item=><Todoitem todoDate={item.duedate} todoName={item.name}></Todoitem>)}
</div>
)
}
export default TodoItems