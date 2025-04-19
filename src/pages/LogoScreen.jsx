import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Logoscreen.css"; // Importing the CSS for the Logo screen

const LogoScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // After 3 seconds, navigate to the home page
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, [navigate]);

  return (
    <div className="logo-screen">
      <img
        src="/logo.png" // Ensure the logo is in the public folder
        alt="Oota Finder Logo"
        className="logo"
      />
    </div>
  );
};

export default LogoScreen;
