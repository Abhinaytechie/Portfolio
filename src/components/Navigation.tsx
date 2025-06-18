import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur border-b border-purple-500/20 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link to="/" className="text-2xl font-semibold text-white tracking-tight hover:text-purple-400 transition">
            Bhargava Sai Abhinay
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 px-2 py-1 rounded ${
                  location.pathname === item.path
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white transition-colors'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Resume Button */}
            <a
              href="https://ik.imagekit.io/sv5x3c7qr/Abhinay_Resume.pdf?updatedAt=1748365155976"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden overflow-hidden bg-gray-950 backdrop-blur border-t border-purple-500/20"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'text-purple-400'
                  : 'text-gray-300 hover:text-white transition-colors'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://ik.imagekit.io/sv5x3c7qr/Abhinay_Resume.pdf?updatedAt=1748365155976"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <FileText size={20} />
            Resume
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
