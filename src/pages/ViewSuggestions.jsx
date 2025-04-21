import React, { useEffect, useState } from "react";
const ViewSuggestions = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("suggestedSpots")) || [];
    setSpots(stored);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Suggested Food Spots 🍽️</h2>
      {spots.length === 0 ? (
        <p>No suggestions yet!</p>
      ) : (
        <ul>
          {spots.map((spot, index) => (
            <li key={index} style={{ marginBottom: "1rem" }}>
              <strong>{spot.name}</strong> – {spot.location}
              <br />
              <em>{spot.reason}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewSuggestions;
