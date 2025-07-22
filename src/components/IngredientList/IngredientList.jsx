
const IngredientList = (props) => {

const addItem =(item)=>{
props.addIngredient(item);

}
  return (
   <ul>
{props.ingredientList.map((ingredient,id)=>(
  <li key={id} style={{ backgroundColor: ingredient.color }}>{ingredient.name} <button onClick={()=>addItem(ingredient)}>+</button></li>
  
))}
  </ul>
)}

export default IngredientList;
