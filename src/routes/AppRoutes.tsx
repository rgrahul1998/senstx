import { Routes, Route } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"
import Home from "../pages/Home"
import ContactPage from "../features/contact/ContactPage"
import ServicesPage from "../features/services/ServicesPage"
import CareerPage from "../features/career/CareerPage"
import WhoWeArePage from "../features/about/WhoWeArePage"
import FinancialServicesPage from "../features/services/FinancialServices"
import EnterpriseSolutionPage from "../features/services/EnterpriseSolutionPage"
import AIAutomationPage from "../features/services/AIAutomationPage"
import DataAnalyticsPage from "../features/services/DataAnalytics"
import CloudServicesPage from "../features/services/cloudservices"
import AIServicesPage from "../features/services/AIServicesPage"
import UseCasesPage from "../features/usecases/UseCasesPage"
import BlogDetailPage from "../features/usecases/BlogDetailPage"

import NotFound from "../pages/NotFound"

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/financial-services" element={<FinancialServicesPage />} />
                <Route path="/services/enterprise-solution" element={<EnterpriseSolutionPage />} />
                <Route path="/services/ai-automation" element={<AIAutomationPage />} />
                <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/services/cloud-services" element={<CloudServicesPage />} />
                <Route path="/services/ai-services" element={<AIServicesPage />} />
                <Route path="/use-cases" element={<UseCasesPage />} />
                <Route path="/use-cases/:blog_name" element={<BlogDetailPage />} />

                <Route path="/career" element={<CareerPage />} />
                <Route path="/who-we-are" element={<WhoWeArePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
