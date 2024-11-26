import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import { useState } from "react";
//string array ko list array item me convert krnaa map  hota he
function App() {
  //  let foodItems=[]
  // let foodItems = ["Dal", "green vegatable", "Milk", "Roti", "Salad", "ghee"];

  // let textStateArr=useState("Food Item entered by user");
  // let textToshow=textStateArr[0];
  // let setTextState=textStateArr[1]
  // let [textToshow,setTextState]=useState();
  let [foodItems, setFoodItems] = useState([
    // "salad",
    // "Green vegetable",
    // "Roti",
  ]);
  // let emptyfood=foodItems.length===0?<h3>still i am hungry</h3>:null
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value="";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
    //  console.log(`${event.target.value}`);
    //  setTextState(event.target.value)
  };
  return (
    <>
      <Container>
        <h1 className="foodheading">Healthy Food</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>

        <ErrorMessage items={foodItems}></ErrorMessage>
      </Container>
      {/* <Container>
  <p>Above is the list of healthy foods that are good for your health and 
    well being
  </p>
 </Container> */}
    </>
  );
}

export default App;
