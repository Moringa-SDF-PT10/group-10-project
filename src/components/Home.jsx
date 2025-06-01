import { useState, useEffect } from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import FoodList from "./FoodList"
import LoginForm from "./LoginForm"
import Search from "./Search"


function Home() {
 
//Initialize the initial state of data in an empty array before fetching
const [foods, setFoods]= useState([])
const [loading, setLoading] = useState(true);

//Initialize the initial state of search
const [searchedItem, setSearchedItem] = useState('')



  // // Helper function to get image from TheMealDB
  // const getImageForFood = async (description) => {
  //   const keywords = description.split(',')[0].split(' ').slice(0, 2).join(' ');
  //   try {
  //     const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keywords}`);
  //     const data = await res.json();
  //     return data.meals?.[0]?.strMealThumb || "https://via.placeholder.com/500x600?text=No+Image";
  //   } catch (err) {
  //     console.error("Image fetch failed for:", description, err);
  //     return "https://via.placeholder.com/500x600?text=No+Image";
  //   }
  // };


//Fetch data using the useEffect hook
useEffect(() => {
  const fetchFoodsWithRandomImages = async () => {
    try {
      // 1. Fetch food data from USDA
      const foodResponse = await fetch("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=8Rv57kYxBTe6DURXfAZu8DBKcol1W0hpsrc7d1xJ");
      const foodData = await foodResponse.json();
      const limitedFoods = foodData.slice(3, 23); // fetch only 20 .. limit for performance

      // 2. Fetch meal data from MealDB
      const mealResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const mealData = await mealResponse.json();
      const meals = mealData.meals;

      // 3. Assign a random image from meals to each food item
      const enrichedFoods = limitedFoods.map(food => {
        const randomMeal = meals[Math.floor(Math.random() * meals.length)];
        return {
          ...food,
          image: randomMeal.strMealThumb || "https://via.placeholder.com/500x600?text=No+Image"
        };
      });

      setFoods(enrichedFoods);
      setLoading(false)
    } catch (err) {
      console.error("Failed to fetch foods or meals", err);
    }
  };

  fetchFoodsWithRandomImages();
}, []);
      
//  // Log foods whenever it updates
//  useEffect(() => {
//    console.log(foods);
//  }, [foods]);

  if (loading) return <p>Loading food details…</p>;
  

  //updated the state of searched item to be the input on the form
  const formChangeHandler = (e)=>{
     setSearchedItem(e.target.value)

  }




  return (
    <>
    <div className = "container">
      <h1>Welcome to the Food Nutrition App </h1>
      <h1>No Guess work, What's In Food</h1>
      <p>Dive deep into what’s really on your plate. Search foods, explore nutrients, and track the details that matter most.</p>
      <p>Whether you're tracking macros or just curious, we’ve got the full breakdown — from Vitamin A to Zinc. </p>
      <p>Unlock 66 nutrient facts per item.</p>
      <Search formChangeHandler ={formChangeHandler}/>
      
      <FoodList searchedItem = {searchedItem} foods = {foods}/>
    </div>
      
     
    </>
  )
}

export default Home
