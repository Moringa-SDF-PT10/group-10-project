
import { Link, Routes, Route } from "react-router-dom";
import FoodList from "./FoodList";
import LoginForm from "./LoginForm";
import Search from "./Search";
import MyFavorites from "./MyFavorites";

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
  favorites
}) {
 
 

  if (loading) return <p>Loading food details…</p>;

  //updated the state of searched item to be the input on the form
  const formChangeHandler = (e) => {
    setSearchedItem(e.target.value);
  };

  console.log("food in home:", foods)
  console.log("food in favorites:", favorites)

  return (
    <>
      <div className="container">
        <h1>Welcome to the Food Nutrition App </h1>
        <h1>No Guess work, What's In Food</h1>
        <p>
          Dive deep into what’s really on your plate. Search foods, explore
          nutrients, and track the details that matter most to help you make healthful eating choices
        </p>
        <p>
          Whether you're tracking macros or just curious, we’ve got the full
          breakdown — from Vitamin A to Zinc.{" "}
        </p>
        <p>Unlock 66 nutrient facts per item.</p>
        <Search formChangeHandler={formChangeHandler} />

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

        <MyFavorites
          foods={foods}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onDeleteFood={onDeleteFood}
          commentsById={commentsById}
          handleLeaveComment={handleLeaveComment}
        />
      </div>
    </>
  );
}

export default Home;
