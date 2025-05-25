import Food from './Food.jsx'
import { useState } from 'react'

export default function FoodList({foods}){

  const [favorites, setFavorites] = useState([])

  const onToggleFavorite = (fdcId) => {
    setFavorites((prevFavorites) => prevFavorites.includes(fdcId) ? prevFavorites.filter(id => id !== fdcId) : [...prevFavorites, fdcId])
   }

    return(

    <div className = "food-list">
      
      {foods.map(food=>(
        <Food 
        key = {food.fdcId} 
        food = {food} 
        isFavorite={favorites.includes(food.fdcId)}
        onToggleFavorite={onToggleFavorite}
        />
      ))}

        
    </div>


    )
}