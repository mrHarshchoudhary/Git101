import Todoitem from "./Todoitem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div classNameName={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Todoitem
        key={item.name}
          todoDate={item.duedate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></Todoitem>
      ))}
    </div>
  );
};
export default TodoItems;
