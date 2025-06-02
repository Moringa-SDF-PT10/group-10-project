import Home from "./Home";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import FoodJournalForm from "./FoodJournalForm";
import { Link, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "./MyProfile";
import MyFavorites from "./MyFavorites";
import MyDashboard from "./MyDashboard";
import DailyWellnessLog from "./DailyWellnessLog";
import AboutUs from "./AboutUs";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import FoodDetails from "./FoodDetails";
import { useState, useEffect } from "react";



export default function App() {
  //Initialize the initial state of data in an empty array before fetching
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  //Initialize the initial state of search
  const [searchedItem, setSearchedItem] = useState("");

  const [deletedIds, setDeletedIDs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [commentsById, setCommentsById] = useState({});

  //delete food hanlder
  const onDeleteFood = (fdcId) => {
    setDeletedIDs((prev) => [...prev, fdcId]);
    setFavorites((prev) => prev.filter((id) => id !== fdcId));
  };

  //mark as favorite handler
  const onToggleFavorite = (fdcId) => {
    setFavorites((prev) =>
      prev.includes(fdcId)
        ? prev.filter((id) => id !== fdcId)
        : [...prev, fdcId]
    );
  };

  //Comment handler
  const handleLeaveComment = (fdcId, commentText) => {
    setCommentsById((prev) => ({
      ...prev,
      [fdcId]: commentText,
    }));
  };

  //Fetch data using the useEffect hook
  useEffect(() => {
    const fetchFoodsWithRandomImages = async () => {
      try {
        // 1. Fetch food data from USDA
        const foodResponse = await fetch(
          "https://api.nal.usda.gov/fdc/v1/foods/list?api_key=8Rv57kYxBTe6DURXfAZu8DBKcol1W0hpsrc7d1xJ"
        );
        const foodData = await foodResponse.json();
        const limitedFoods = foodData.slice(3, 23); // fetch only 20 .. limit for performance

        // 2. Fetch meal data from MealDB
        const mealResponse = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const mealData = await mealResponse.json();
        const meals = mealData.meals;

        // 3. Assign a random image from meals to each food item
        const enrichedFoods = limitedFoods.map((food) => {
          const randomMeal = meals[Math.floor(Math.random() * meals.length)];
          return {
            ...food,
            image:
              randomMeal.strMealThumb ||
              "https://via.placeholder.com/500x600?text=No+Image",
          };
        });

        setFoods(enrichedFoods);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch foods or meals", err);
      }
    };

    fetchFoodsWithRandomImages();
  }, []);

  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const handleIn = () => {
  navigate("/LoginForm");
};

  return (
    <div>
      <nav className="app-nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/AboutUs"}>About</Link>
        <Link to={"/MyFavorites"}>My Favorites</Link>
        <Link to={"/FoodJournalForm"}>My Food Journal</Link>
        <Link to={"/DailyWellnessLog"}>My Daily Wellness Log</Link>
        <Link to={"/MyDashboard"}>My Dashboard</Link>
        <Link to={"/LoginForm"}>Login Form</Link>
        <Link to={"/SignUp"}>Sign Up</Link>
        <Link to={"/MyProfile"}>My Profile</Link>

        <button onClick= {!user? handleIn : handleLogout} className="logout-button">
          {!user ? "Login" : "Logout"}
        </button>
      </nav>

      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                foods={foods}
                loading={loading}
                searchedItem={searchedItem}
                setSearchedItem={setSearchedItem}
                onToggleFavorite={onToggleFavorite}
                onDeleteFood={onDeleteFood}
                commentsById={commentsById}
                handleLeaveComment={handleLeaveComment}
                deletedIds={deletedIds}
                favorites={favorites}
              />
            }
          />

          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AboutUs" element={<AboutUs />} />

          {/* Protected Route */}
          <Route
            path="/FoodJournalForm"
            element={
              <PrivateRoute>
                <FoodJournalForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/MyProfile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/MyFavorites"
            element={
              <PrivateRoute>
                <MyFavorites
                  foods={foods}
                  favorites={favorites}
                  onToggleFavorite={onToggleFavorite}
                  onDeleteFood={onDeleteFood}
                  commentsById={commentsById}
                  onLeaveComment={handleLeaveComment}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/MyDashboard"
            element={
              <PrivateRoute>
                <MyDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/food/:fdcId"
            element={
              <PrivateRoute>
                <FoodDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/DailyWellnessLog"
            element={
              <PrivateRoute>
                <DailyWellnessLog />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
