import Food from "./Food.jsx";

export default function MyFavorites({ foods=[], favorites=[], onToggleFavorite, onDeleteFood, commentsById, onLeaveComment }) {
  const favoriteFoods = foods.filter(food => favorites.includes(food.fdcId));


  //check if favorites exists
  if (favoriteFoods.length === 0) {
    return <p className="no-favorites-msg">You haven’t added any favorites yet. Go explore and click the heart icon to save your faves!</p>;
  }
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
