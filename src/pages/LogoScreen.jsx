import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Logoscreen.css";
import Logo from "../assets/Logo.png"; 

const LogoScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logo-screen">
      <img
        src={Logo} 
        alt="Oota Finder Logo"
        className="logo"
      />
    </div>
  );
};

export default LogoScreen;
