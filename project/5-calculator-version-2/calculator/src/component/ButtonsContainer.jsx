import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonscontainer}>
      {buttonNames.map((buttonName) => (
        <button className={styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>//callback to parents
      ))}
    </div>
  );
};
export default ButtonsContainer;
