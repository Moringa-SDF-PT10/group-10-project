import Food from './Food.jsx'

export default function FoodList({foods}){

    return(

    <div className = "food-list">
      
      {foods.map(food=>(<Food key = {food.fdcId} food = {food} />))}

        
    </div>


    )
}