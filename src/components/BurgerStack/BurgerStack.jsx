
const BurgerStack = (props) => {
  const removeItem=(item)=>{
    props.removeIngredient(item)
  }
  
  
  return (
    
    
    
    <ul>
{props.chosenIngredient.map((ingredient,id)=>(
  <li key={id} style={{ backgroundColor: ingredient.color }}>{ingredient.name} <button onClick={()=>removeItem(ingredient)}>-</button></li>
  
))}
    </ul>
   
    
  
  )
};

export default BurgerStack;
