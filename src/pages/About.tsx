import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-[#1a1033] text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* About Me Header */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className="text-5xl font-extrabold mb-8 text-purple-400 text-center"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Smooth Hover Animation */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
            className="relative group"
          >
            <motion.img
              src="https://ik.imagekit.io/sv5x3c7qr/abhi.jpg?updatedAt=1742832419417"
              alt="Profile"
              className="rounded-xl shadow-xl w-full transition-all duration-500 backdrop-blur-md backdrop-brightness-110"
              whileHover={{
                scale: 1.08,
                rotate: 1.5,
                boxShadow: "0px 12px 50px rgba(128, 0, 255, 0.6)",
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            />
          </motion.div>

          {/* About Me Text Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              Hey! I'm <span className="text-purple-400 font-semibold">Bhargava Sai Abhinay</span>, a Full Stack Developer & AI enthusiast. I specialize in crafting scalable web applications using{" "}
              <span className="text-purple-400 font-semibold">React.js, Spring Boot, and MongoDB.</span>
            </p>

            <p className="text-lg leading-relaxed">
              I thrive on solving challenging problems using <span className="text-purple-400 font-semibold">Data Structures & Algorithms</span>. Apart from building projects, I contribute to open-source, participate in hackathons, and develop AI-driven solutions.
            </p>

            {/* Quick Facts Section */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                Quick Facts
              </h2>
              <ul className="space-y-3 text-lg">
                <li>🎓 B.Tech in Computer Science (3rd Year)</li>
                <li>💼 Full Stack Developer | AI Enthusiast</li>
                <li>🌍 Based in Hyderabad, India</li>
                <li>🚀 Contributor at SSOC & Member of GDG</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
