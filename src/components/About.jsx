import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">About Me</h2>
          <p className="text-lg text-gray-300 mb-4">
            Hi! I'm <span className="text-accent font-semibold">Bondalapati Bhargava Sai Abhinay</span>, a passionate AI-integrated full-stack developer. I specialize in building scalable AI-powered apps, robust backends (Spring Boot, FastAPI), and seamless user experiences with React. I'm an open-source contributor, active in GDG and SSOC, and love exploring GenAI, LangChain, and automation tools.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>AI & GenAI app builder</li>
            <li>Spring Boot, FastAPI, MongoDB</li>
            <li>React, Tailwind, Framer Motion</li>
            <li>Open source, GDG, SSOC</li>
          </ul>
        </motion.div>

        {/* Image Section with Creative Styling */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center relative"
        >
          {/* Glowing blur background ring */}
          <div className="absolute w-72 h-72 rounded-full bg-[var(--color-primary)] opacity-20 blur-2xl animate-pulse" />

          {/* Animated image container */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <img
              src={profileImg}
              alt="Abhinay profile"
              className="rounded-2xl w-64 h-64 object-cover border-4 border-[var(--color-primary)] shadow-xl"
              draggable={false}
            />

            {/* Pulse ring border overlay */}
            <span className="absolute inset-0 rounded-2xl border-4 border-[var(--color-primary)] animate-ping opacity-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
