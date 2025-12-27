import logo from "../../assets/logo/Senstx.png"

const Footer = () => {
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
                            <a className="text-gray-600 hover:text-gray-900" href="#">
                                Financial Services
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-900" href="#">
                                Enterprise Solutions
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-900" href="#">
                                AI & Automation
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li>
                            <a className="text-gray-600 hover:text-gray-900" href="#">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-900" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p className="text-gray-600">info@senstx.com</p>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
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
