import Food from "./Food.jsx";

export default function FoodList({
  foods,
  searchedItem,
  deletedIds = [],
  favorites,
  onToggleFavorite,
  onDeleteFood,
  commentsById,
  handleLeaveComment,
}) {
  const filteredFoods = foods
    .filter((food) => !deletedIds.includes(food.fdcId))
    .filter((food) =>
      food.description?.toLowerCase().includes(searchedItem.toLowerCase())
    );

  return (
    <div className="food-list">
      {filteredFoods.length === 0 ? (
        <div className="no-food-message">No food matches your search.</div>
      ) : (
        foods
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
          ))
      )}
    </div>
  );
}
