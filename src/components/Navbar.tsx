import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useDarkMode } from '../hooks/useDarkMode';
import { FaBars, FaTimes } from 'react-icons/fa';

/**
 * Modern Navbar component for the Galation Brothers website.
 * Features glassmorphism design, smooth animations, and responsive layout.
 */
const Navbar: React.FC = () => {
  // const { isDark, toggleDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
            : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <img
                  alt="Galation Brothers Logo"
                  className="h-10 md:h-20 w-auto rounded p-1 transition-transform group-hover:scale-105"
                  src={`${import.meta.env.BASE_URL}assets/GalationBrothers_logo.png`}
                />
                <div className="hidden lg:flex flex-col">
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 leading-tight">
                    Galation Brothers
                  </span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400">
                    Insurance Solutions
                  </span>
                </div>
              </Link>

              {/* AFC Partnership */}
              <div className="hidden md:flex items-center ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] uppercase font-bold text-gray-500 dark:text-gray-400 leading-tight tracking-wider">
                    In Partnership With
                  </span>
                  <img
                    alt="AFC Holdings Logo"
                    className="h-9 w-auto mt-1 opacity-80 hover:opacity-100 transition-opacity"
                    src={`${import.meta.env.BASE_URL}assets/AFC_logo.png`}
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Insurance' },
                { to: '/feedback', label: 'Feedback' },
                { to: '/contact', label: 'Contact' },
                { to: '/about', label: 'About Us' },
              ].map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                      isActive
                        ? 'bg-blue-950/10 text-blue-950 dark:text-blue-400 dark:bg-blue-400/10'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-950 dark:hover:text-blue-400'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-blue-950 dark:bg-blue-400 transition-all duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></span>
                  </Link>
                );
              })}

              {/* Dark Mode Toggle - Commented out */}
              {/*
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400"
                aria-label="Toggle dark mode"
              >
                <span className="material-symbols-outlined text-lg">
                  {isDark ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
              */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Dark Mode Toggle - Commented out */}
              {/*
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400"
                aria-label="Toggle dark mode"
              >
                <span className="material-symbols-outlined text-lg">
                  {isDark ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
              */}

              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-lg" />
                ) : (
                  <FaBars className="text-lg" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div
          className={`absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Insurance' },
              { to: '/feedback', label: 'Feedback' },
              { to: '/contact', label: 'Contact' },
              { to: '/about', label: 'About Us' },
            ].map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-950/10 text-blue-950 dark:text-blue-400 dark:bg-blue-400/10'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;