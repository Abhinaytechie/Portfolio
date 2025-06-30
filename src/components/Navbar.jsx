import { useState, useEffect } from "react";
import {
  Link as ScrollLink,
  animateScroll,
  Events, // ← listen for scroll‑end
} from "react-scroll";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* nav map */
const navLinks = [
  { to: "hero", label: "Home" },
  { to: "about", label: "About" },
  { to: "projects", label: "Projects" },
  { to: "techstack", label: "Tech Stack" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // spyEnabled prevents auto‑highlight while scrolling
  const [spyEnabled, setSpyEnabled] = useState(true);

  /* re‑enable spy when react‑scroll finishes */
  useEffect(() => {
    Events.scrollEvent.register("end", () => setSpyEnabled(true));
    return () => Events.scrollEvent.remove("end");
  }, []);

  /* click handler */
  const handleClick = (section) => {
    setSpyEnabled(false); // suppress highlight switching
    setActive(section);   // highlight instantly
    setMenuOpen(false);   // close mobile if open
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 h-16 bg-bg/80 backdrop-blur border-b border-[var(--color-border)] z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <button
          onClick={() => animateScroll.scrollToTop()}
          aria-label="Scroll to top"
          className="text-lg md:text-xl font-bold tracking-wider text-white hover:text-[var(--color-primary)] transition-colors"
        >
          Abhinay Portfolio
        </button>

        {/* ───────────── DESKTOP NAV ───────────── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <div key={item.to} className="relative flex flex-col items-center">
              <ScrollLink
                to={item.to}
                smooth
                duration={500}
                offset={-64}
                spy={spyEnabled}
                onSetActive={() => spyEnabled && setActive(item.to)}
                onClick={() => handleClick(item.to)}
                className={`cursor-pointer text-sm font-medium px-1 py-0.5 transition-colors ${
                  active === item.to
                    ? "text-[var(--color-primary)]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </ScrollLink>

              {/* underline */}
              <AnimatePresence>
                {active === item.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-[var(--color-primary)]"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.25 }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* CV */}
          <a
            href="https://ik.imagekit.io/sv5x3c7qr/Abhinay_Resume.pdf?updatedAt=1743960788994"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--color-primary)] text-white text-sm font-medium shadow hover:opacity-90 transition"
          >
            <FileText size={18} />
            Download CV
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ───────────── MOBILE MENU ───────────── */}
      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open:  { height: "auto", opacity: 1, transition: { duration: 0.25 } },
          closed:{ height: 0,      opacity: 0, transition: { duration: 0.25 } },
        }}
        className="md:hidden overflow-hidden bg-bg/90 backdrop-blur border-t border-[var(--color-border)]"
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-64}
              spy={spyEnabled}
              onSetActive={() => spyEnabled && setActive(item.to)}
              onClick={() => handleClick(item.to)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                active === item.to
                  ? "text-[var(--color-primary)]"
                  : "text-gray-300 hover:text-white transition-colors"
              }`}
            >
              {item.label}
            </ScrollLink>
          ))}

          {/* mobile CV */}
          <a
            href="/assets/Abhinay_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white"
          >
            <FileText size={20} />
            Download CV
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
