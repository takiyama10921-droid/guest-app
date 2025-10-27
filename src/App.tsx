import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GuestPage from "./pages/GuestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guest/:id" element={<GuestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
