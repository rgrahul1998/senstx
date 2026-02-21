import { Link } from "react-router-dom"
import logo from "../../assets/logo/Senstx.png"
import { useSettings } from "../../context/SettingsContext"

const Footer = () => {
    const { settings } = useSettings()

    return (
        <footer className="bg-white text-gray-700 rounded-b-2xl shadow-sm">
            {/* Top Section */}
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Column 1 */}
                <div>
                    <div className="flex items-center mb-4">
                        <img src={logo} alt="Senstx Logo" className="h-10 w-auto" />
                    </div>
                    <p className="text-gray-500 leading-relaxed">
                        Transforming businesses through innovative software solutions and expert
                        consulting services.
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                className="text-gray-600 hover:text-gray-900"
                                to="/services/financial-services"
                            >
                                Financial Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-600 hover:text-gray-900"
                                to="/services/enterprise-solution"
                            >
                                Enterprise Solutions
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-600 hover:text-gray-900"
                                to="/services/ai-services"
                            >
                                Artificial Intelligence
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-600 hover:text-gray-900"
                                to="/services/cloud-services"
                            >
                                Cloud Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-600 hover:text-gray-900"
                                to="/services/data-analytics"
                            >
                                Data Analytics
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link className="text-gray-600 hover:text-gray-900" to="/who-we-are">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-600 hover:text-gray-900" to="/career">
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-600 hover:text-gray-900" to="/use-cases">
                                Use Cases
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-600 hover:text-gray-900" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p className="text-gray-600">{settings?.company_email}</p>
                    <p className="text-gray-600 mt-1">{settings?.company_mobile}</p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 w-full"></div>

            {/* Copyright */}
            <div className="py-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Senstx. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
