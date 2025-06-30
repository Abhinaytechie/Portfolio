import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const resumeURL = "https://ik.imagekit.io/sv5x3c7qr/Abhinay_Resume.pdf?updatedAt=1748365155976";

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 w-full bg-gray-950/80 backdrop-blur border-b border-[var(--color-border)] z-50"
      style={{ boxShadow: "0 2px 32px rgba(255,124,0,0.20)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold tracking-widest text-white hover:text-[var(--color-primary)] transition"
          >
            Bhargava Sai Abhinay
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-1 text-sm font-medium transition-colors ${
                    isActive ? "text-[var(--color-primary)]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-[var(--color-primary)] rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Resume button */}
            <a
              href={resumeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--color-primary)] text-white text-sm font-medium shadow hover:opacity-90 transition"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-gray-300 hover:text-white transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-gray-950/90 backdrop-blur border-t border-[var(--color-border)]"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? "text-[var(--color-primary)]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Resume */}
              <a
                href={resumeURL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white"
              >
                <FileText size={20} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
