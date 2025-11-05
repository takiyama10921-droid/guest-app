import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GuestPage from "./pages/GuestPage";
import ReceptionPage from "./pages/ReceptionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guest/:id" element={<GuestPage />} />
        <Route path="/reception/:code" element={<ReceptionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
