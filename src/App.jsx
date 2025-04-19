import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogoScreen from "./pages/LogoScreen.jsx";
import Home from "./pages/Home.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogoScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
