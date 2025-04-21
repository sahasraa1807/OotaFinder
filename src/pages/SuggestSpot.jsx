import React, { useState } from "react";
import "../styles/SuggestSpot.css";

const SuggestSpot = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new spot data
    const newSpot = {
      name: formData.name,
      location: formData.location,
      reason: formData.reason,
    };

    // Retrieve existing data from localStorage (if any)
    const existingData = JSON.parse(localStorage.getItem("suggestedSpots")) || [];

    // Add the new spot to the existing data
    existingData.push(newSpot);

    // Save the updated data back to localStorage
    localStorage.setItem("suggestedSpots", JSON.stringify(existingData));

    // Clear the form and show the submission message
    setFormData({
      name: "",
      location: "",
      reason: "",
    });
    setSubmitted(true);
  };

  return (
    <div className="suggest-wrapper">
      <h1>Suggest a Spot 📝</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Restaurant Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <textarea
            name="reason"
            placeholder="Why do you recommend it?"
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Thanks for suggesting! 😄</p>
      )}
    </div>
  );
};

export default SuggestSpot;
