import BurgerStack from './components/BurgerStack/BurgerStack';
import IngredientList from './components/IngredientList/IngredientList';
import './App.css';
import { useState } from 'react';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [chosenIngredient,setChosenIngredient]= useState([])

  const addIngredient =(ingredient)=>{
     setChosenIngredient([...chosenIngredient,ingredient])
    
  }
const removeIngredient =(ingredient)=>{

setChosenIngredient(chosenIngredient.filter((x,id)=>id!== chosenIngredient.indexOf(ingredient)))

}

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredientList={availableIngredients} addIngredient={addIngredient} />
        <BurgerStack chosenIngredient={chosenIngredient} removeIngredient={removeIngredient}/>
      </section>
    </main>
  );
};

export default App;
