// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogoScreen from './pages/LogoScreen';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import DetailPage from './pages/DetailPage';
import SuggestSpot from './pages/SuggestSpot';
import TooBrokeMood from './pages/TooBrokeMood';
import ViewSuggestions from './pages/ViewSuggestions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogoScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/restaurant/:id" element={<DetailPage />} />
        <Route path="/suggest" element={<SuggestSpot />} />
        <Route path="/toobrokemood" element={<TooBrokeMood />} />
        <Route path="/viewsuggestions" element={<ViewSuggestions />} />
      </Routes>
    </Router>
  );
}

export default App;
