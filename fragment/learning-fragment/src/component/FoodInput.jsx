import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown}) => {
  // const handleOnchange = (event) => {
  //   console.log(`${event.target.value}`);
  // };
  return (
    <input 
      type="text"
      placeholder="Enter Food Item"
      className={styles.FoodInput}
     onKeyDown={ handleKeyDown}
    />
  );
};
export default FoodInput;
