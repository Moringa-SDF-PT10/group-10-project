import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FoodDetails() {
  const { fdcId } = useParams();
  //set initial state of food to null
  const [food, setFood] = useState(null);
  //set the initial state of loading to true
  const [loading, setLoading] = useState(true);

  //fetch foods accoriding to id

  useEffect(() => {
    const fetchFoodsWithRandomImages = async () => {
      try {
        // 1. Fetch food data from USDA
        const foodResponse = await fetch(
          `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=8Rv57kYxBTe6DURXfAZu8DBKcol1W0hpsrc7d1xJ`
        );
        const foodData = await foodResponse.json();

        // 2. Fetch meal data from MealDB
        const mealResponse = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const mealData = await mealResponse.json();
        const meals = mealData.meals;

        // 3. Assign a random image from meals to each food item
        const randomMeal = meals[Math.floor(Math.random() * meals.length)];
        const enrichedFoods = {
          ...foodData,
          image:
            randomMeal.strMealThumb ||
            "https://via.placeholder.com/500x600?text=No+Image",
        };

        setFood(enrichedFoods);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch foods or meals", err);
      }
    };

    fetchFoodsWithRandomImages();
  }, []);

  if (loading) return <p>Loading food details…</p>;
  if (!food) return <p>Sorry, food details not found.</p>;

  console.log(food);

  return (
    <div className="food-details-container">
       
    <div className="food-details-image-wrapper">
    <div id="detailed-nutrient-main-box">
      <h2>{food.description}</h2>
      <div style={{ textAlign: "center" }}>
        <img src={food.image} alt={food.description} width="500" height="600" />
      </div>
      <div id="detail-nutrient-container">
        <ul className="nutrient-list">
          {food.foodNutrients &&
            food.foodNutrients.map((nutrient, index) => (
              <li key={index}>
                <span className="nutrient-name">{nutrient.nutrient.name}</span>

                <span className="nutrient-details">
                  {nutrient.nutrient.number} {nutrient.nutrient.unitName}
                </span>
              </li>
            ))}
          <span>
            <h3 className="food-meta"> Data Type: {food.dataType}</h3>
            <h3 className="food-meta">
              Publication Data: {food.publicationDate}
            </h3>
            <h3 className="food-meta">Food Class: {food.foodClass}</h3>
          </span>
        </ul>
      </div>
    </div>
   </div>
   </div>
  );
}
