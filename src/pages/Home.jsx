import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; 
import SuggestSpot from "./SuggestSpot";


const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`, { state: { category } });
  };

  return (
    <div className="home-wrapper">
      <h1>Welcome to Oota Finder!</h1>
      <p className="tagline">Discover the best food spots in Bengaluru</p>

      <div className="category-grid">
        <div
          className="category-card"
          onClick={() => handleCategoryClick("north-indian")}
        >
          North Indian Food
        </div>
        <div
          className="category-card"
          onClick={() => handleCategoryClick("south-indian")}
        >
          South Indian Food
        </div>
        <div
          className="category-card"
          onClick={() => handleCategoryClick("dosa-points")}
        >
          Best Dosa Points
        </div>
        <div
          className="category-card"
          onClick={() => handleCategoryClick("budget-friendly")}
        >
          Budget-Friendly Hotels
        </div>
        <div className="category-card" onClick={() => navigate("/toobrokemood")}>
          💸 Too Broke Mode
        </div>
      </div>

      {/* Add SuggestSpot form here */}
      <div className="suggest-spot-section">
        <h2>Got a great spot? Suggest it here!</h2>
        <SuggestSpot /> {/* Rendering the SuggestSpot form */}
      </div>
      <div
        className="category-card"
        onClick={() => navigate("/viewsuggestions")}
      >
        📋 View Suggested Spots
      </div>
    </div>
  );
};

export default Home;
