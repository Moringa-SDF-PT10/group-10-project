import {useState} from 'react';
import { Link } from "react-router-dom";

export default function Food({food, isFavorite, onToggleFavorite, onDeleteFood, savedComment = "", onLeaveComment }){
   const [showNoteInput, setShowNoteInput] = useState(false);
  const [note, setNote] = useState(savedComment);

  const handleLeaveNoteClick = () => {
    setShowNoteInput(prev => !prev);
  };

  const handleSaveNote = () => {
    onLeaveComment(food.fdcId, note);
    setShowNoteInput(false);
  };



return(

<div className = "food-box">
    <p> {food.description}</p>
  
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
 <button>
           
           View Details
    
    </button>

     <button onClick={() => onToggleFavorite(food.fdcId)}>
           
      {isFavorite ? " Unmark as Favorite" : "Mark as Favorite"}
    
    </button>

      <button onClick={() => onDeleteFood(food.fdcId)}>
           
           Delete Food
    
    </button>
  
      <button onClick={handleLeaveNoteClick} >
        {showNoteInput ? 'Cancel' : 'Leave a Note'}
      </button>

     <Link to={`/food/${food.fdcId}`}>
            <button>View Full Details</button>
          </Link>
  
      {showNoteInput && (
        <div>
          <textarea
            rows="4"
            cols="50"
            placeholder="Write your note here..."
            value={note}
            onChange={e => setNote(e.target.value)}
          />
          <br />
          <button onClick={handleSaveNote}>Save Note</button>
        </div>
      )}

      
      {!showNoteInput && savedComment && (
        <div>
          <strong>Your Comment:</strong>
          <p>{savedComment}</p>
        </div>
      )}



</div>
</div>



)



}