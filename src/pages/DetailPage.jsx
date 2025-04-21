// src/pages/DetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "../styles/DetailPage.css";

const DetailPage = () => {
  const { id } = useParams();

  // Demo data or mock API data can be used for now
  return (
    <div className="detail-wrapper">
      <h1>🍽️ Restaurant Detail Page</h1>
      <p>This page will show detailed info for restaurant ID: {id}</p>
    </div>
  );
};

export default DetailPage;
