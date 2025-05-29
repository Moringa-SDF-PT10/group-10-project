import { Link } from "react-router-dom"

export default function Food({food, isFavorite, onToggleFavorite, onDeleteFood}){

return(

<div className = "food-box">
    <p>Food Description: {food.description}</p>
  
  <div style={{ textAlign: 'center' }}>
  <img src={food.image} alt={food.description} width="500" height="600" />
</div>
       <h5>
     <ul className="nutrient-list">
  {food.foodNutrients.slice(0, 6).map((nutrient, index) => (
    <li key={index}>
      <span className="nutrient-name">{nutrient.name}</span>
      <span className="nutrient-details">
        {nutrient.number}&nbsp;
         {nutrient.unitName}
      </span>
    </li>
  ))}
</ul>

      
    </h5>

   <h3 className="food-meta">Data Type: {food.dataType}</h3>
<h3 className="food-meta">Publication Date: {food.publicationDate}</h3>

 
 <div className = 'food-buttons'>

     <button onClick={() => onToggleFavorite(food.fdcId)}>
           
      {isFavorite ? " Unmark as Favorite" : "Mark as Favorite"}
    
    </button>
      <button onClick={() => onDeleteFood(food.fdcId)}>
           
           Delete Food
    
    </button>

     <Link to={`/food/${food.fdcId}`}>
            <button>View Full Nutrient List</button>
          </Link>
  

</div>
  




</div>



)



}