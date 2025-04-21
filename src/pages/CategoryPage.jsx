// src/pages/CategoryPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CategoryPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // replace with restaurant API
      .then(response => response.json())
      .then(data => {
        setRestaurants(data); // assuming 'data' is an array of restaurant objects
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  if (loading) return <div className="loading">Loading restaurants...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="category-page">
      <h1>Restaurants in Bengaluru</h1>
      <div className="restaurant-list">
        {restaurants.map((res) => (
          <div key={res.id} className="restaurant-card">
            <h2>{res.name}</h2>
            <p>{res.address.street}</p>
            <p>{res.company.catchPhrase}</p>
            <span className="category-badge">{res.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
