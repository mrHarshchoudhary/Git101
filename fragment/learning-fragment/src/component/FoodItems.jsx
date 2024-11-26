import Item from "./Item";
import { useState } from "react";
const FoodItems = ({ items }) => {
  // let foodItems=['Dal','green vegatable','Milk','Roti','Salad','ghee']
  let [activeItems, SetActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    SetActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditem={item}
          bought={activeItems.includes(item)}
          handlerbuybutton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
