import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import ContactPage from "../features/contact/ContactPage";
import ServicesPage from "../features/services/ServicesPage";
import CareerPage from "../features/career/CareerPage";
import WhoWeArePage from "../features/about/WhoWeArePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* Placeholder routes for now */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
