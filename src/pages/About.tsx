import React, { useState } from "react";
import { motion } from "framer-motion";

function GlitchText({ text }: { text: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className={`relative inline-block font-futuristic text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500 ${hovered ? 'animate-glitch' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
      <span className="absolute left-0 top-0 w-full h-full opacity-40 blur-sm pointer-events-none select-none animate-glitch2">{text}</span>
    </span>
  );
}

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#1a1033] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Animated Heading */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-14"
        >
          <GlitchText text="👨‍💻 About Me" />
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative group"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="rounded-xl overflow-hidden shadow-lg border border-accent/40 bg-white/5 backdrop-blur-lg hover:shadow-accent/40 transition-shadow"
            >
              <motion.img
                src="https://ik.imagekit.io/sv5x3c7qr/abhi.jpg?updatedAt=1742832419417"
                alt="Abhinay"
                className="w-full h-auto rounded-xl transform transition-all duration-500"
                whileHover={{ scale: 1.07, rotate: 2 }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-200">
              Hey! I'm{" "}
              <span className="text-purple-400 font-semibold">
                Bhargava Sai Abhinay
              </span>, a passionate{" "}
              <span className="text-purple-300 font-semibold">
                Full Stack Developer
              </span>{" "}
              &{" "}
              <span className="text-purple-300 font-semibold">
                AI enthusiast
              </span>. I specialize in building scalable apps using{" "}
              <span className="text-pink-400 font-semibold">
                React.js, Spring Boot & MongoDB
              </span>.
            </p>

            <p className="text-lg leading-relaxed text-gray-200">
              I love solving real-world problems through{" "}
              <span className="text-purple-400 font-semibold">
                DSA & AI-powered solutions
              </span>. I'm also an open-source contributor, a hackathon warrior, and an explorer of AI agents and GenAI tools.
            </p>

            {/* Quick Facts */}
            <div className="mt-8 bg-white/5 p-6 rounded-xl border border-purple-500/20 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">
                ⚡ Quick Facts
              </h2>
              <ul className="space-y-3 text-gray-200 text-base">
                {['🎓 B.Tech in Computer Science (Final Year)','💼 Software Engineer | AI Project Builder','🌍 Based in Hyderabad, India','🚀 Contributor @ SSOC | Member of GDG'].map((fact, i) => (
                  <motion.li key={fact} whileHover={{ scale: 1.08, color: '#a259ff' }} transition={{ type: 'spring', stiffness: 300 }}>
                    {fact}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
