import Food from "./Food.jsx";

export default function MyFavorites({ foods=[], favorites=[], onToggleFavorite, onDeleteFood, commentsById, onLeaveComment }) {
  const favoriteFoods = foods.filter(food => favorites.includes(food.fdcId));

  console.log(favorites)
  return (
    <div className="food-list">
      {favoriteFoods.map((food) => (
        <Food
          key={food.fdcId}
          food={food}
          isFavorite={true}
          onToggleFavorite={onToggleFavorite}
          onDeleteFood={onDeleteFood}
          savedComment={commentsById[food.fdcId] || ""}
          onLeaveComment={onLeaveComment}
        />
      ))}
    </div>
  );
}
