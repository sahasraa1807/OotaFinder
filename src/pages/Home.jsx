import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; 

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
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
      </div>
    </div>
  );
};

export default Home;
