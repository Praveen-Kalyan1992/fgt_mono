import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Contact from "../pages/Landing/Contact/Contact";
import OurServices from "../pages/Landing/OurServices/OurServices";
import About from "../pages/Landing/About/About";
import Portfolio from "../pages/Landing/Portfolio/Portfolio";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;