import Food from "./Food.jsx";

export default function FoodList({ foods, searchedItem, deletedIds=[], favorites, onToggleFavorite, onDeleteFood, commentsById, handleLeaveComment}) {
  return (
    <div className="food-list">
      {foods
        .filter((food) => !deletedIds.includes(food.fdcId))
        .filter((food) =>
          food.description?.toLowerCase().includes(searchedItem.toLowerCase())
        )
        .map((food) => (
          <Food
            key={food.fdcId}
            food={food}
            isFavorite={favorites.includes(food.fdcId)}
            onToggleFavorite={onToggleFavorite}
            onDeleteFood={onDeleteFood}
            savedComment={commentsById[food.fdcId] || ""}
            handleLeaveComment={handleLeaveComment}
          />
        ))}
    </div>
  );
}
