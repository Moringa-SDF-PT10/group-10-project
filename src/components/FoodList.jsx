import Food from './Food.jsx'
import {useState} from 'react'
import Search from './Search'

export default function FoodList({foods}){

  



    return(
     

    <div className = "food-list">
      
      {foods.map(food=>(<Food key = {food.fdcId} food = {food} />))}

    

        
    </div>


    )
}