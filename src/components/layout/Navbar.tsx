import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, MenuItem } from "@mui/material"
import { ChevronDown } from "lucide-react"

import logo from "../../assets/logo/Senstx.png"

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const services = [
        { name: "Financial Services", href: "/services/FinancialServicesPage" },
        { name: "Enterprise Solution", href: "/services/enterprise-solution" },
        { name: "AI & Automation", href: "/services/ai-automation" },
        { name: "Data Analytics", href: "/services/data-analytics" },
        { name: "Cloud Services", href: "/services/cloud-services" },
        { name: "Digital Solutions", href: "/services/digital-solutions" },
    ]

    return (
        <nav className="backdrop-blur-xl bg-white/10 border-b border-white/20 py-1 px-4 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Senstx Logo" className="h-14 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link
                        to="/who-we-are"
                        className="text-gray-600 transition-colors hover:font-medium hover:text-gray-900"
                    >
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
                            className="text-gray-600 transition-colors flex items-center gap-1 hover:font-medium hover:text-gray-900"
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
                                >
                                    {service.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>

                    <Link
                        to="/career"
                        className="text-gray-600 transition-colors hover:font-medium hover:text-gray-900"
                    >
                        Career
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-600 transition-colors hover:font-semibold hover:text-gray-900"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
