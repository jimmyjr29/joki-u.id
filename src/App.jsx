import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";

import HomePage from "./pages/HomePage";
import PaketPage from "./pages/PaketPage";
import TutorPage from "./pages/TutorPage";
import FaqPage from "./pages/FaqPage";
import PromoPage from "./pages/PromoPage";

function App() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/paket" Component={PaketPage} />
        <Route path="/tutor" Component={TutorPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/promo" Component={PromoPage} />
      </Routes>
      <FooterComp />
    </div>
  );
}

export default App;
