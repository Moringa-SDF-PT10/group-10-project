import { useState } from "react";
import Food from "./Food.jsx";

export default function FoodList({ foods }) {
  const [commentsById, setCommentsById] = useState({});

  const handleLeaveComment = (fdcId, commentText) => {
    setCommentsById((prev) => ({
      ...prev,
      [fdcId]: commentText,
    }));
  };

  return (
    <div className="food-list">
      {foods.map((food) => (
        <Food
          key={food.fdcId}
          food={food}
          savedComment={commentsById[food.fdcId] || ""}
          onLeaveComment={handleLeaveComment}
        />
      ))}
    </div>
  );
}
