import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import VisitingCards from "./pages/VisitingCards/VisitingCards";
import Posters from "./pages/Posters/Posters";
import Stationery from "./pages/Stationery/Stationery";
import LabelsStickers from "./pages/LabelsStickers/LabelsStickers";
import OfficeSupplies from "./pages/OfficeSupplies/OfficeSupplies";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Resturant from "./pages/Resturant/Resturant";
import { useEffect } from "react";

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };


  return (
    <div className="app">
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          
          <Route path="/visiting-cards" element={<VisitingCards />} />
          <Route path="/signs-posters" element={<Posters />} />
          <Route path="/marriage-materials" element={<Stationery />} />
          <Route path="/labels-stickers" element={<LabelsStickers />} />
          <Route path="/office-hospital-stationery" element={<OfficeSupplies />} />
          <Route path="/resturant-accessories" element={<Resturant />} />


          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
