import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import ContactPage from "../features/contact/ContactPage";
import ServicesPage from "../features/services/ServicesPage";
import CareerPage from "../features/career/CareerPage";
import WhoWeArePage from "../features/about/WhoWeArePage";
import FinancialServicesPage from "../features/services/FinancialServices";
import EnterpriseSolutionPage from "../features/services/EnterpriseSolutionPage";
import AIAutomationPage from "../features/services/AIAutomationPage";
import DataAnalyticsPage from "../features/services/DataAnalytics";
import CloudServicesPage from "../features/services/cloudservices";
import DigitalSolutionsPage from "../features/services/digitalsolutions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* Placeholder routes for now */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/FinancialServicesPage" element={<FinancialServicesPage />} />
        <Route path="/services/enterprise-solution" element={<EnterpriseSolutionPage />} />
        <Route path="/services/ai-automation" element={<AIAutomationPage />} />
        <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
        <Route path="/services/cloud-services" element={<CloudServicesPage />} />
        <Route path="/services/digital-solutions" element={<DigitalSolutionsPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
