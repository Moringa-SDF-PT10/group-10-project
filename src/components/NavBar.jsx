import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ user, handleLogout, handleIn }) {
  return (
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

      <button onClick={!user ? handleIn : handleLogout} className="logout-button">
        {!user ? "Login" : "Logout"}
      </button>
    </nav>
  );
}
