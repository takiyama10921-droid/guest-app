import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GuestPage from "./pages/GuestPage";
import ReceptionPage from "./pages/ReceptionPage";
import SeatingChartPage from "./pages/SeatingChartPage";
import { GuestProvider } from "./context/GuestContext";
import MenuPage from "./pages/MenuPage";
import PhotoGalleryPage from "./pages/PhotoGalleryPage";
import TimelinePage from "./pages/TimelinePage";

function App() {
  return (
    <GuestProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guest/:id" element={<GuestPage />} />
          <Route path="/reception/:code" element={<ReceptionPage />} />
          <Route path="/seating" element={<SeatingChartPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/photo" element={<PhotoGalleryPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
      </Router>
    </GuestProvider>
  );
}

export default App;
