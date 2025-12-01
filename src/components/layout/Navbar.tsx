import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Button } from "@mui/material";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const services = [
    { name: "Financial Services", href: "/services/financial-services" },
    { name: "Enterprise Solution", href: "/services/enterprise-solution" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "Data Analytics", href: "/services/data-analytics" },
    { name: "Cloud Services", href: "/services/cloud-services" },
    { name: "Digital Solutions", href: "/services/digital-solutions" },
  ];

  return (
    <nav className="backdrop-blur-xl bg-white/10 border-b border-white/20 p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold ">
          Consulting App
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/who-we-are"
            className="text-gray-600  transition-colors"
          >
            Who We Are
          </Link>

          <div>
            <Button
              id="services-button"
              aria-controls={open ? "services-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="text-gray-600 transition-colors capitalize text-base font-normal p-0 min-w-0 hover:bg-transparent"
              endIcon={<ChevronDown className="h-4 w-4" />}
            >
              Services
            </Button>
            <Menu
              id="services-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "services-button",
              }}
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
            className="text-gray-600 transition-colors"
          >
            Career
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
