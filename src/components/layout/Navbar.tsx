import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, MenuItem } from "@mui/material"
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import logo from "../../assets/logo/Senstx.png"

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const open = Boolean(anchorEl)
    const location = useLocation()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const services = [
        { name: "Artificial Intelligence", href: "/services/ai-services" },
        { name: "Financial Services", href: "/services/financial-services" },
        { name: "Enterprise Solution", href: "/services/enterprise-solution" },
        { name: "Cloud Services", href: "/services/cloud-services" },
        { name: "Data Analytics", href: "/services/data-analytics" },
    ]

    const isActive = (path: string) => location.pathname === path
    const isServicesActive = () => location.pathname.startsWith("/services")

    const navLinkClass = (path: string) =>
        `transition-colors ${
            isActive(path)
                ? "text-gray-900 font-semibold"
                : "text-gray-600 hover:text-gray-900 hover:font-medium"
        }`

    return (
        <nav className="backdrop-blur-xl bg-white/10 border-b border-white/20 py-1 px-4 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    <img src={logo} alt="Senstx Logo" className="h-14 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12 items-center">
                    <Link to="/who-we-are" className={navLinkClass("/who-we-are")}>
                        Who we are
                    </Link>

                    {/* Services Dropdown */}
                    <div>
                        <button
                            id="services-button"
                            aria-controls={open ? "services-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            className={`transition-colors flex items-center gap-1 ${
                                isServicesActive()
                                    ? "text-gray-900 font-semibold"
                                    : "text-gray-600 hover:text-gray-900 hover:font-medium"
                            }`}
                        >
                            Services
                            <ChevronDown className="h-4 w-4" />
                        </button>

                        <Menu
                            id="services-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            transitionDuration={0}
                        >
                            {services.map((service) => (
                                <MenuItem
                                    key={service.href}
                                    onClick={handleClose}
                                    component={Link}
                                    to={service.href}
                                    selected={isActive(service.href)}
                                >
                                    {service.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>

                    <Link to="/use-cases" className={navLinkClass("/use-cases")}>
                        Use Cases
                    </Link>
                    <Link to="/career" className={navLinkClass("/career")}>
                        Career
                    </Link>
                    <Link to="/contact" className={navLinkClass("/contact")}>
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-gray-900 focus:outline-none transition-transform active:scale-95"
                    >
                        {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl overflow-hidden"
                    >
                        <div className="py-6 px-6 space-y-6">
                            <Link
                                to="/who-we-are"
                                className={`block font-medium text-lg border-b border-gray-100 pb-2 ${
                                    isActive("/who-we-are")
                                        ? "text-gray-900 font-semibold"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Who we are
                            </Link>

                            <div className="space-y-3">
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                                    Services
                                </p>
                                <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-gray-100">
                                    {services.map((service) => (
                                        <Link
                                            key={service.href}
                                            to={service.href}
                                            className={`block text-base ${
                                                isActive(service.href)
                                                    ? "text-gray-900 font-semibold"
                                                    : "text-gray-600 hover:text-gray-900"
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                to="/use-cases"
                                className={`block font-medium text-lg border-b border-gray-100 pb-2 ${
                                    isActive("/use-cases")
                                        ? "text-gray-900 font-semibold"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Use Cases
                            </Link>
                            <Link
                                to="/career"
                                className={`block font-medium text-lg border-b border-gray-100 pb-2 ${
                                    isActive("/career")
                                        ? "text-gray-900 font-semibold"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Career
                            </Link>
                            <Link
                                to="/contact"
                                className={`block font-medium text-lg border-b border-gray-100 pb-2 ${
                                    isActive("/contact")
                                        ? "text-gray-900 font-semibold"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
