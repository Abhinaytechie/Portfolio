import React from "react";
import { motion } from "framer-motion";

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
          className="text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse"
        >
          👨‍💻 About Me
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
            <div className="rounded-xl overflow-hidden shadow-lg border border-purple-600/40 bg-white/5 backdrop-blur-lg hover:shadow-purple-700/40 transition-shadow">
              <motion.img
                src="https://ik.imagekit.io/sv5x3c7qr/abhi.jpg?updatedAt=1742832419417"
                alt="Abhinay"
                className="w-full h-auto rounded-xl transform transition-all duration-500"
                whileHover={{
                  scale: 1.05,
                  rotate: 1.5,
                }}
              />
            </div>
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
                <motion.li whileHover={{ scale: 1.05 }}>
                  🎓 B.Tech in Computer Science (Final Year)
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }}>
                  💼 Software Engineer | AI Project Builder
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }}>
                  🌍 Based in Hyderabad, India
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }}>
                  🚀 Contributor @ SSOC | Member of GDG
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
