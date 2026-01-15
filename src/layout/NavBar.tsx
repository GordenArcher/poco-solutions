import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import {
  Home,
  Briefcase,
  DollarSign,
  Users,
  Phone,
  FileText,
  Menu,
  X,
  Sparkles,
  Mail,
} from "lucide-react";

const NavBar = () => {
  const [showSide, setShowSide] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setShowSide(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openSide = useCallback(() => {
    setShowSide((prevState) => !prevState);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: Home,
    },
    {
      path: "/service",
      label: "Services",
      icon: Briefcase,
    },
    {
      path: "/pricing",
      label: "Pricing",
      icon: DollarSign,
    },
    {
      path: "/about",
      label: "About Us",
      icon: Users,
    },
    {
      path: "/vacancies",
      label: "Vacancies",
      icon: FileText,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: Phone,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const slideIn = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 -mb-12 ${
          isScrolled
            ? "bg-blue-900/95 backdrop-blur-lg shadow-2xl py-2"
            : "bg-blue-600 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  {/*<motion.img
                    src={Logo}
                    alt="Poco Solutions Logo"
                    className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />*/}
                  <motion.div
                    className="absolute -inset-1 bg-white/20 rounded-full blur-md"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                </div>
                <div className="flex flex-col">
                  <motion.span
                    className="text-xl font-bold text-white tracking-tight"
                    whileHover={{ color: "#FBBF24" }}
                  >
                    POCO SOLUTIONS
                  </motion.span>
                  <motion.span
                    className="text-xs text-blue-100 opacity-90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 0.7 }}
                  >
                    Academic Excellence
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={item.path}>
                    <motion.div
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-white/20 text-white"
                          : "text-blue-100 hover:bg-white/10 hover:text-white"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.label}</span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="hidden lg:block"
            >
              <Link to="/contact">
                <motion.button
                  className="flex items-center cursor-pointer gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-4 h-4" />
                  Get Started
                </motion.button>
              </Link>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={openSide}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              {showSide ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {showSide && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={openSide}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            <motion.div
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-linear-to-b bg-blue-900 z-50 shadow-2xl lg:hidden"
            >
              <div className="p-6 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  {/*<div className="flex items-center gap-3">
                    <img
                      src={Logo}
                      alt="Poco Solutions Logo"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-white">
                        POCO SOLUTIONS
                      </h2>
                      <p className="text-xs text-blue-200">Academic Support</p>
                    </div>
                  </div>*/}
                  <button
                    onClick={openSide}
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link to={item.path} onClick={openSide}>
                        <motion.div
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                            location.pathname === item.path
                              ? "bg-white/20 text-white"
                              : "text-blue-100 hover:bg-white/10 hover:text-white"
                          }`}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-8 border-t border-white/20"
                >
                  <p className="text-blue-100 text-sm mb-4">
                    Ready to start your academic journey?
                  </p>
                  <div className="space-y-3 flex flex-col gap-2.5">
                    <Link to="/contact" onClick={openSide}>
                      <motion.button
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Free Consultation
                      </motion.button>
                    </Link>
                    <Link to="/contact" onClick={openSide}>
                      <motion.button
                        className="w-full border border-white/30 text-white py-3 px-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 p-4 bg-white/10 rounded-xl"
                >
                  <h3 className="text-sm font-medium text-white mb-2">
                    Contact Us
                  </h3>
                  <div className="space-y-1">
                    <p className="text-xs text-blue-200 flex items-center gap-1">
                      <Phone size={15} />
                      <span>027 569 7715</span>
                    </p>
                    <p className="text-xs text-blue-200 flex items-center gap-1">
                      <Mail size={15} />
                      <span>pocosolution@gmail.com</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);
          }
        }

        .animate-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default NavBar;
