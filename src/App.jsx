import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import VisitingCards from "./pages/VisitingCards/VisitingCards";
import Posters from "./pages/Posters/Posters";
import Stationery from "./pages/Stationery/Stationery";
import LabelsStickers from "./pages/LabelsStickers/LabelsStickers";
import Stamps from "./pages/Stamps/Stamps";
import OfficeSupplies from "./pages/OfficeSupplies/OfficeSupplies";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/visiting-cards" element={<VisitingCards />} />
          <Route path="/signs-posters" element={<Posters />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/labels-stickers" element={<LabelsStickers />} />
          <Route path="/stamps" element={<Stamps />} />
          <Route path="/office-supplies" element={<OfficeSupplies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
