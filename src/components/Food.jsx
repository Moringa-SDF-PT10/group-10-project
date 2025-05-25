export default function Food({food, isFavorite, onToggleFavorite}){

return(

<div className = "food-box">
    <p>Food Description: {food.description}</p>
   <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="some food picture" width="500" height="600"></img>
       <h5>
      <ul>
        {food.foodNutrients.slice(0,6).map((nutrient, index) => (
          <li key={index}>
           {nutrient.name} &nbsp;
            {nutrient.number}&nbsp;
            {nutrient.amount} 
            {nutrient.unitName}
          </li>
        ))}
      </ul>

      
    </h5>

    <h3>Data Type: {food.dataType}</h3>
    <h3>Publication Data:{food.publicationDate}</h3>

     <button onClick={() => onToggleFavorite(food.fdcId)}>
           
      {isFavorite ? "Unmark Favorite" : "Marks as Favorite"}
    
    </button>
      <button>
           
           Delete Food
    
    </button>
  


  




</div>



)



}