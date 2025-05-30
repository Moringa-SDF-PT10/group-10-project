import { useState } from "react";
import '../assets/css/index.css'

export default function Food({ food, savedComment = "", onLeaveComment }) {
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [note, setNote] = useState(savedComment);

  const handleLeaveNoteClick = () => {
    setShowNoteInput(prev => !prev);
  };

  const handleSaveNote = () => {
    onLeaveComment(food.fdcId, note);
    setShowNoteInput(false);
  };

  return (
    <div className="food-box">
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
                {nutrient.number}&nbsp;{nutrient.amount} {nutrient.unitName}
              </span>
            </li>
          ))}
        </ul>
      </h5>
      <h3 className="food-meta">Data Type: {food.dataType}</h3>
      <h3 className="food-meta">Publication Date: {food.publicationDate}</h3>

      <button>View Details</button>
      <button>Mark as favorite</button>
      <button>Delete Food</button>

      
      <button onClick={handleLeaveNoteClick} style={{ marginTop: '10px' }}>
        {showNoteInput ? 'Cancel' : 'Leave a Note'}
      </button>

      {showNoteInput && (
        <div style={{ marginTop: '10px' }}>
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
        <div className="note-display" style={{ marginTop: '10px' }}>
          <strong>Your Comment:</strong>
          <p>{savedComment}</p>
        </div>
      )}
    </div>
  );
}