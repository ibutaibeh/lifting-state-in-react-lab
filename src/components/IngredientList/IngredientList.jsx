import { useState } from "react";
import App from "../../App";


const IngredientList = (props) => {

const addItem =(item)=>{
props.addIngredient(item);
console.log('item',item)
}
  return (
   <ul>
{props.ingredientList.map((ingredient,id)=>(
  <li key={id} style={{ backgroundColor: ingredient.color }}>{ingredient.name} <button onClick={()=>addItem(ingredient)}>+</button></li>
  
))}
  </ul>
)}

export default IngredientList;
