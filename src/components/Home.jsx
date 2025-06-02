import FoodList from "./FoodList";
import Search from "./Search";

function Home({
  foods,
  loading,
  searchedItem,
  setSearchedItem,
  onToggleFavorite,
  onDeleteFood,
  commentsById,
  handleLeaveComment,
  deletedIds,
  favorites,
}) {
  if (loading) return <p>Loading …</p>;

  //updated the state of searched item to be the input on the form
  const formChangeHandler = (e) => {
    setSearchedItem(e.target.value);
  };

  console.log("food in home:", foods);
  console.log("food in favorites:", favorites);

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-title">Welcome to the Food Nutrition App</h1>
        <p className="home-tagline">
          No Guesswork, Dive deep into what’s really on your plate!
        </p>
        <img
          className="home-hero-image"
          src="./src/assets/images/desktop.png"
          alt="Healthy food"
        />
        <p className="home-description">
          Discover what’s on your plate. Search any food, explore detailed
          nutrient information, and make informed eating choices with
          confidence. Whether you're counting macros or just curious, get a full
          breakdown — from Vitamin A to Zinc. Each item reveals 66 nutrition
          facts to help you eat smarter.
        </p>
      </div>

      <div className="home-search">
        <Search formChangeHandler={formChangeHandler} />
      </div>

      <div className="home-food-list">
        <FoodList
          searchedItem={searchedItem}
          foods={foods}
          onToggleFavorite={onToggleFavorite}
          onDeleteFood={onDeleteFood}
          commentsById={commentsById}
          handleLeaveComment={handleLeaveComment}
          deletedIds={deletedIds}
          favorites={favorites}
        />
      </div>
    </div>
  );
}

export default Home;
