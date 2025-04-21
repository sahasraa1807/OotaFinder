import React, { useState } from "react";
import "../styles/TooBrokeMood.css";

const suggestions = [
  "🍛 Visit ISKCON Temple – Free Prasadam!",
  "🍴 Malls = free food samples 😉",
  "🎓 Crash college canteens for ₹20 dosas",
  "🙏 Free food at temples during festivals",
  "🛒 Pretend you're shopping at D-Mart, try everything",
  "👵 Grandmother’s house – always open buffet 😋",
  "🍞 5 rupees Bun Butter from local bakeries"
];

const TooBrokeMood = () => {
  const [idea, setIdea] = useState(
    suggestions[Math.floor(Math.random() * suggestions.length)]
  );

  const shuffleIdea = () => {
    const newIdea =
      suggestions[Math.floor(Math.random() * suggestions.length)];
    setIdea(newIdea);
  };

  return (
    <div className="too-broke-wrapper">
      <h1>💸 Too Broke Mode</h1>
      <p className="suggestion">{idea}</p>
      <button className="shuffle-btn" onClick={shuffleIdea}>
        Gimme Another Idea 🔁
      </button>
    </div>
  );
};

export default TooBrokeMood;
