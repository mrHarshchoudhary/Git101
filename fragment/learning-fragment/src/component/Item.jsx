import styles from"./Item.module.css"
const Item=({fooditem, bought,handlerbuybutton})=>{
  // const handlerbuybutton=(event)=>{
  //     console.log(`${fooditem} item being bought`)
  // } eski jagah jha se fooditem aa rha he mtylb wo parents he to udhar declare krke idhar render krwana 
return (
<li  className={`${styles["kg-item"]} list-group-item ${bought &&"active"} `}>
      <span className={styles["kg-span"]}> {fooditem}</span> 
      <button className={`${styles.button} btn btn-info`}
      onClick={handlerbuybutton}//direct handlerbuybutton pass kr de run hoga onclick={handlerbuybutton}
      >Buy</button>
      </li>
)
}
export default Item 