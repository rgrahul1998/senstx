import { Link } from "react-router-dom"
import logo from "../../assets/logo/Senstx.png"
import { useSettings } from "../../context/SettingsContext"
import { X } from "lucide-react"
import { ensureAbsoluteUrl } from "../../utils/blogUtils"

// Custom SVG Icons to avoid Lucide deprecation warnings for brand icons
const FacebookIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
)

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
)

const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z" />
        <path d="m9.75 15.02 5.75-3.02-5.75-3.02V15.02z" />
    </svg>
)

const Footer = () => {
    const { settings } = useSettings()

    const socialLinks = settings?.social_links

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

            {/* Bottom Footer */}
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-sm">
                <div className="text-center md:text-left">
                    © {new Date().getFullYear()} Senstx. All rights reserved.
                </div>
                <div className="flex items-center space-x-5">
                    {socialLinks?.linkedin && (
                        <a
                            href={ensureAbsoluteUrl(socialLinks.linkedin)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon size={20} />
                        </a>
                    )}
                    {socialLinks?.twitter_x && (
                        <a
                            href={ensureAbsoluteUrl(socialLinks.twitter_x)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900 transition-colors"
                            aria-label="X (Twitter)"
                        >
                            <X size={20} />
                        </a>
                    )}
                    {socialLinks?.facebook && (
                        <a
                            href={ensureAbsoluteUrl(socialLinks.facebook)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700 transition-colors"
                            aria-label="Facebook"
                        >
                            <FacebookIcon size={20} />
                        </a>
                    )}
                    {socialLinks?.youtube && (
                        <a
                            href={ensureAbsoluteUrl(socialLinks.youtube)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-600 transition-colors"
                            aria-label="YouTube"
                        >
                            <YoutubeIcon size={20} />
                        </a>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer
