import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Mail, Phone } from "lucide-react";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Leadership & Specialists", href: "/team" },
    { name: "Partners", href: "/partners" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md border-b border-border bg-cyan-950/25 shadow-xl"
          : "bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow"
      }`}
      style={{ zIndex: 9999 }}
    >
      {/* Contact Strip */}
      <div
        className={`bg-cyan-500 text-primary-foreground transition-all duration-300 ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-12 opacity-100"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          {/* <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-full"> */}
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center space-x-1">
              <div className="flex items-left space-x-1 mr-5">
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium hidden sm:inline">
                  help@centrallabventures.com
                </span>
                <span className="text-sm font-medium sm:hidden">Email Us</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium hidden sm:inline">
                  +63 (082) 226 2530 / 094 346 03369
                </span>
                <span className="text-sm font-medium sm:hidden">Call Us</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <a href="#" className="text-yellow-50 hover:text-blue-500">
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/CentralLabDavao" className="text-yellow-50 hover:text-blue-600">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="text-yellow-50 hover:text-pink-500">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-yellow-50 hover:text-blue-700">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-full"> */}
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            data-testid="logo-link"
          >
            <img
              src="/assets/images/logo-01.png"
              width="75px"
              alt="Central Lab Ventures Logo"
            />
            <span className="company-name text-xl font-bold">
              Central Lab <br />
              Ventures, Inc.
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
                style={{ fontFamily: "var(--nav-font)", fontSize: "1.12rem" }}
                data-testid={`nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              data-testid="theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-4 py-2 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
